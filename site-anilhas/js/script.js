setInterval(function () {
    listTagBirds();
}, 2000);

function formatDateTime(dateTime) {
    const date = new Date(dateTime);
    const pad = (num) => num.toString().padStart(2, '0');
    
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

function populateTable(anilhas) {
    const tableBody = document.querySelector('#table tbody');
    tableBody.innerHTML = '';

    anilhas.forEach(anilha => {
        const row = document.createElement('tr');

        const cellName = document.createElement('td');
        cellName.textContent = anilha.nome;
        cellName.className = 'text-center';
        row.appendChild(cellName);

        const cellAnilha = document.createElement('td');
        cellAnilha.textContent = anilha.codigo;
        cellAnilha.className = 'text-center d-none d-md-table-cell';
        row.appendChild(cellAnilha);

        const cellDataCriacao = document.createElement('td');
        cellDataCriacao.textContent = formatDateTime(anilha.entrada); 
        cellDataCriacao.className = 'text-center d-none d-md-table-cell';
        row.appendChild(cellDataCriacao);

        const cellAcoes = document.createElement('td');
        cellAcoes.className = 'text-center d-none d-md-table-cell';

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.className = 'btn btn-primary btn-sm me-2';
        editButton.onclick = () => editAnilha(anilha.id);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.onclick = () => showDeleteModal(anilha.id);

        if (window.location.pathname === '/cadastros.html') {
            cellAcoes.appendChild(editButton);
            cellAcoes.appendChild(deleteButton);
            row.appendChild(cellAcoes);
        }
        tableBody.appendChild(row);
    });
}

function showDeleteModal(id) {
    const modal = document.getElementById('deleteModal');
    modal.style.display = "block";

    const confirmButton = document.getElementById('confirmDeleteButton');
    confirmButton.onclick = function() {
        deleteAnilha(id);
        closeDeleteModal();
    };
}

function closeDeleteModal() {
    const modal = document.getElementById('deleteModal');
    modal.style.display = "none";
}

function deleteAnilha(id) {
    fetch(`85.31.63.241:3000/excluirAnilha/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .catch(error => {
        console.error("Erro ao excluir anilha:", error);
    });
}

async function editAnilha(id) {
    // fetch(`85.31.63.241:3000/excluirAnilha/${id}`, {
    //     method: 'DELETE',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .catch(error => {
    //     console.error("Erro ao excluir anilha:", error);
    // });
    const response = await axios.get('http://85.31.63.241:3000/listarAnilha');
    const anilhas = response.data;
    anilhas.forEach(anilha => {
        alert(anilha.nome);
    });
}

async function listTagBirds() {
    try {
        const response = await axios.get('http://85.31.63.241:/listarAnilha');
        const anilhas = response.data;
        populateTable(anilhas);
    } catch (error) {
        console.error('Erro ao listar as anilhas:', error);
    }
}