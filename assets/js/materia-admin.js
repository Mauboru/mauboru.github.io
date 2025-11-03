// Sistema de gerenciamento de chamadas e plano de aula

// Lista padrão de alunos (pode ser editada após login)
const DEFAULT_ALUNOS = [
  "Aluno 1", "Aluno 2", "Aluno 3", "Aluno 4", "Aluno 5",
  "Aluno 6", "Aluno 7", "Aluno 8", "Aluno 9", "Aluno 10"
];

// Carregar lista de alunos do LocalStorage ou usar padrão
function getAlunosList() {
  const stored = localStorage.getItem("materia_alunos");
  return stored ? JSON.parse(stored) : DEFAULT_ALUNOS;
}

function saveAlunosList(alunos) {
  localStorage.setItem("materia_alunos", JSON.stringify(alunos));
}

// Carregar chamadas salvas
function loadChamadas() {
  const chamadas = getChamadas();
  if (chamadas.length > 0) {
    document.getElementById("chamadasList").style.display = "block";
    displayChamadasList(chamadas);
  }
}

function getChamadas() {
  const params = new URLSearchParams(window.location.search);
  const materiaKeyRaw = params.get("materia") || "geral";
  const materiaKey = materiaKeyRaw.replace(/[^a-zA-Z0-9_-]/g, "_");
  const stored = localStorage.getItem(`chamadas_${materiaKey}`);
  return stored ? JSON.parse(stored) : [];
}

function saveChamada(chamada) {
  const params = new URLSearchParams(window.location.search);
  const materiaKeyRaw = params.get("materia") || "geral";
  const materiaKey = materiaKeyRaw.replace(/[^a-zA-Z0-9_-]/g, "_");
  const chamadas = getChamadas();
  chamadas.push(chamada);
  localStorage.setItem(`chamadas_${materiaKey}`, JSON.stringify(chamadas));
}

function displayChamadasList(chamadas) {
  const container = document.getElementById("chamadasListContent");
  container.innerHTML = "";
  
  // Ordenar por data (mais recente primeiro)
  chamadas.sort((a, b) => new Date(b.data) - new Date(a.data));
  
  chamadas.forEach((chamada, index) => {
    const div = document.createElement("div");
    div.style.cssText = "background: var(--bg-color); padding: 1.5rem; border-radius: 1rem; margin-bottom: 1rem; border: 0.1rem solid var(--main-color);";
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <h4 style="color: var(--main-color); font-size: 1.8rem;">${chamada.data} - ${chamada.turma}</h4>
        <button class="admin-btn" style="background: #dc3545; padding: 0.5rem 1rem; font-size: 1.2rem;" onclick="deleteChamada(${index})">
          <i class="bx bx-trash"></i>
        </button>
      </div>
      <div class="presenca-stats">
        <div class="presenca-stat">
          <h4>Presentes</h4>
          <p>${chamada.presentes}</p>
        </div>
        <div class="presenca-stat">
          <h4>Faltas</h4>
          <p>${chamada.faltas}</p>
        </div>
        <div class="presenca-stat">
          <h4>Total</h4>
          <p>${chamada.total}</p>
        </div>
      </div>
      <div style="margin-top: 1rem;">
        <strong style="color: var(--main-color);">Faltantes:</strong>
        <p style="font-size: 1.3rem; margin-top: 0.5rem;">${chamada.faltantes.join(", ") || "Nenhum"}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

function deleteChamada(index) {
  if (confirm("Deseja realmente excluir esta chamada?")) {
    const params = new URLSearchParams(window.location.search);
    const materiaKeyRaw = params.get("materia") || "geral";
    const materiaKey = materiaKeyRaw.replace(/[^a-zA-Z0-9_-]/g, "_");
    const chamadas = getChamadas();
    chamadas.splice(index, 1);
    localStorage.setItem(`chamadas_${materiaKey}`, JSON.stringify(chamadas));
    loadChamadas();
    loadChamadasDisplay();
  }
}

function loadChamadasDisplay() {
  const chamadas = getChamadas();
  const chamadaContent = document.getElementById("chamada-content");
  
  if (!chamadaContent) return;
  
  if (chamadas.length === 0) {
    chamadaContent.classList.add("empty");
    chamadaContent.innerHTML = "Nenhuma chamada registrada.";
    return;
  }
  
  chamadaContent.classList.remove("empty");
  
  // Pegar chamada mais recente
  const sorted = [...chamadas].sort((a, b) => {
    const dateA = new Date(a.timestamp || a.data);
    const dateB = new Date(b.timestamp || b.data);
    return dateB - dateA;
  });
  const ultimaChamada = sorted[0];
  
  chamadaContent.innerHTML = `
    <div style="background: var(--second-bg-color); padding: 2rem; border-radius: 1.5rem; border: 0.1rem solid var(--main-color);">
      <h3 style="color: var(--main-color); font-size: 2rem; margin-bottom: 1.5rem;">
        Última Chamada - ${ultimaChamada.data} (${ultimaChamada.turma})
      </h3>
      <div class="presenca-stats">
        <div class="presenca-stat">
          <h4>Presentes</h4>
          <p style="color: #28a745;">${ultimaChamada.presentes}</p>
        </div>
        <div class="presenca-stat">
          <h4>Faltas</h4>
          <p style="color: #dc3545;">${ultimaChamada.faltas}</p>
        </div>
        <div class="presenca-stat">
          <h4>Total</h4>
          <p>${ultimaChamada.total}</p>
        </div>
      </div>
    </div>
  `;
}

// Tornar função global
window.loadChamadasDisplay = loadChamadasDisplay;

// Event Listeners quando DOM estiver pronto
document.addEventListener("DOMContentLoaded", function() {
  // Botão Editar Plano
  document.getElementById("editPlanoBtn")?.addEventListener("click", function() {
    const editor = document.getElementById("planoEditor");
    const chamadaOnline = document.getElementById("chamadaOnline");
    editor.classList.toggle("active");
    chamadaOnline.classList.remove("active");
    
    if (editor.classList.contains("active")) {
      const planoText = materiaData?.plano?.join("\n") || "";
      document.getElementById("planoTextarea").value = planoText;
    }
  });

  // Botão Nova Chamada
  document.getElementById("novaChamadaBtn")?.addEventListener("click", function() {
    const chamadaOnline = document.getElementById("chamadaOnline");
    const editor = document.getElementById("planoEditor");
    chamadaOnline.classList.toggle("active");
    editor.classList.remove("active");
    
    if (chamadaOnline.classList.contains("active")) {
      setupChamadaForm();
    }
  });

  // Salvar Plano
  document.getElementById("savePlanoBtn")?.addEventListener("click", function() {
    const texto = document.getElementById("planoTextarea").value;
    const linhas = texto.split("\n").filter(line => line.trim());
    
    const params = new URLSearchParams(window.location.search);
    const materiaKeyRaw = params.get("materia") || "geral";
    const materiaKey = materiaKeyRaw.replace(/[^a-zA-Z0-9_-]/g, "_");
    
    materiaData.plano = linhas;
    localStorage.setItem(`materia_${materiaKey}`, JSON.stringify(materiaData));
    
    document.getElementById("planoEditor").classList.remove("active");
    loadMateria();
    alert("Plano de aula salvo com sucesso!");
  });

  // Cancelar Plano
  document.getElementById("cancelPlanoBtn")?.addEventListener("click", function() {
    document.getElementById("planoEditor").classList.remove("active");
  });

  // Setup formulário de chamada
  function setupChamadaForm() {
    const alunos = getAlunosList();
    const container = document.getElementById("alunosList");
    container.innerHTML = "";
    
    // Data padrão = hoje
    const hoje = new Date().toISOString().split("T")[0];
    document.getElementById("chamadaData").value = hoje;
    
    alunos.forEach((aluno, index) => {
      const item = document.createElement("div");
      item.className = "presenca-item";
      item.innerHTML = `
        <input type="checkbox" id="aluno_${index}" checked>
        <label for="aluno_${index}">${aluno}</label>
      `;
      container.appendChild(item);
    });
  }

  // Salvar Chamada
  document.getElementById("saveChamadaBtn")?.addEventListener("click", function() {
    const data = document.getElementById("chamadaData").value;
    const turma = document.getElementById("chamadaTurma").value;
    const alunos = getAlunosList();
    
    if (!data || !turma) {
      alert("Por favor, preencha data e turma!");
      return;
    }
    
    const presentes = [];
    const faltantes = [];
    
    alunos.forEach((aluno, index) => {
      const checkbox = document.getElementById(`aluno_${index}`);
      if (checkbox.checked) {
        presentes.push(aluno);
      } else {
        faltantes.push(aluno);
      }
    });
    
    const chamada = {
      data: new Date(data).toLocaleDateString("pt-BR"),
      turma: turma,
      presentes: presentes.length,
      faltas: faltantes.length,
      total: alunos.length,
      faltantes: faltantes,
      timestamp: new Date().toISOString()
    };
    
    saveChamada(chamada);
    document.getElementById("chamadaOnline").classList.remove("active");
    loadChamadas();
    loadChamadasDisplay();
    alert("Chamada salva com sucesso!");
  });

  // Cancelar Chamada
  document.getElementById("cancelChamadaBtn")?.addEventListener("click", function() {
    document.getElementById("chamadaOnline").classList.remove("active");
  });

  // Botão Editar Alunos
  document.getElementById("editAlunosBtn")?.addEventListener("click", function() {
    const editor = document.getElementById("alunosEditor");
    const planoEditor = document.getElementById("planoEditor");
    const chamadaOnline = document.getElementById("chamadaOnline");
    editor.classList.toggle("active");
    planoEditor.classList.remove("active");
    chamadaOnline.classList.remove("active");
    
    if (editor.classList.contains("active")) {
      const alunos = getAlunosList();
      document.getElementById("alunosTextarea").value = alunos.join("\n");
    }
  });

  // Salvar Alunos
  document.getElementById("saveAlunosBtn")?.addEventListener("click", function() {
    const texto = document.getElementById("alunosTextarea").value;
    const alunos = texto.split("\n").filter(line => line.trim()).map(line => line.trim());
    
    if (alunos.length === 0) {
      alert("Por favor, adicione pelo menos um aluno!");
      return;
    }
    
    saveAlunosList(alunos);
    document.getElementById("alunosEditor").classList.remove("active");
    alert("Lista de alunos salva com sucesso!");
  });

  // Cancelar Edição de Alunos
  document.getElementById("cancelAlunosBtn")?.addEventListener("click", function() {
    document.getElementById("alunosEditor").classList.remove("active");
  });
});

