let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

const typed = new Typed(".multiple-text", {
  strings: [
    "Desenvolvedor Web",
    "Violinista",
    "Desenvolvedor Mobile",
    "Rabequista",
    "Desenvolvedor de Games",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
  mobile: false,
});

ScrollReveal().reveal(
  ".home-content, .heading, .home-img, .services-container, .portfolio-box, .contact form",
  { origin: "top" }
);
ScrollReveal().reveal(".about-content", { origin: "right" });

!(function () {
  const sc = document.createElement("script");
  sc.src =
    "https://apps.voc.ai/api_v2/gpt/bots/livechat/embed.js?id=14518&token=662C1384E4B06FCDC79360D8";
  sc.async = true;
  sc.defer = true;
  document.body.appendChild(sc);
})();

const systems = [
  {
    name: "Tropical Testes",
    url: "https://tropicaltestes.1nfotech.link/",
    img: "https://tropicaltestes.1nfotech.link/images/logo/logo.png",
  },
  {
    name: "Framework Infotech",
    url: "https://fw.infotech-solucoes.com/",
    img: "https://fw.infotech-solucoes.com/build/assets/infotech250x250-CH6JibDa.png",
  },
  {
    name: "Monkey Mart",
    url: "https://monkeymart.tecnomaub.site/",
    img: "https://monkeymart.tecnomaub.site/icon.png",
  },
  {
    name: "Pokemon Tech",
    url: "https://pokemon-gba.tecnomaub.site/",
    img: "https://www.svgrepo.com/show/276264/pokeball-pokemon.svg",
  },
  {
    name: "Agendo Aqui",
    url: "https://agendoaqui.infotech.app.br/",
    img: "https://agendoaqui.infotech.app.br/logo.png",
  },
  {
    name: "API - Agendo Aqui",
    url: "https://api-agendoaqui.infotech.app.br/",
    img: "https://cdn-icons-png.freepik.com/512/2165/2165004.png",
  },
  {
    name: "Bolsistas Registro",
    url: "https://bolsistasregistro.tecnomaub.site/",
    img: "https://bolsistasregistro.tecnomaub.site/logo.png",
  },
  {
    name: "API - Bolsistas Registro",
    url: "https://api-bolsistasregistro.tecnomaub.site/",
    img: "https://cdn-icons-png.freepik.com/512/2165/2165004.png",
  },
  {
    name: "SOS Gasosa",
    url: "https://sosgasosa.tecnomaub.site/",
    img: "https://sosgasosa.tecnomaub.site/logo.png",
  },
  {
    name: "API - SOS Gasosa",
    url: "https://api-sosgasosa.tecnomaub.site/",
    img: "https://cdn-icons-png.freepik.com/512/2165/2165004.png",
  },
  {
    name: "Grandes Mamíferos",
    url: "https://grandesmamiferos.tecnomaub.site/",
    img: "https://grandesmamiferos.tecnomaub.site/logo.png",
  },
  {
    name: "API - Grandes Mamíferos",
    url: "https://api-serradomar.tecnomaub.site/",
    img: "https://cdn-icons-png.freepik.com/512/2165/2165004.png",
  },
  {
    name: "API - Rupia Wallet",
    url: "https://api-rupiawallet.tecnomaub.site/",
    img: "https://cdn-icons-png.freepik.com/512/2165/2165004.png",
  },
];

function showSystems() {
  const container = document.getElementById("systems-container");
  container.innerHTML = "";

  systems.forEach((sys) => {
    container.innerHTML += `
            <div class="system-card">
                <a href="${sys.url}" target="_blank">
                    <img src="${sys.img}" alt="${sys.name}">
                </a>
                <h3>${sys.name}</h3>
                <div class="system-status system-online">Online</div>
            </div>
        `;
  });
}

showSystems();

// Dados dos serviços para os modais
const servicesData = {
  games: {
    icon: "bx-joystick-alt",
    title: "Desenvolvimento de Jogos",
    description: "Transformo suas ideias em experiências interativas incríveis!",
    details: [
      "Desenvolvimento de jogos 2D e 3D com engines modernas",
      "Game Design completo desde a concepção até a publicação",
      "Implementação de mecânicas de gameplay inovadoras",
      "Otimização de performance para múltiplas plataformas",
      "Integração de sistemas de monetização quando necessário"
    ],
    tech: ["GameMaker Studio 2", "Unity", "Godot", "JavaScript", "HTML5"],
    projects: [
      {
        name: "Eco-Guardiões",
        description: "Jogo educativo vencedor do Hackathon 2023 IFPR",
        image: "assets/images/eco.jpg",
        link: "https://gx.games/pt-br/games/gg8xv5/eco-guardioes/"
      }
    ]
  },
  api: {
    icon: "bx-code-alt",
    title: "Desenvolvimento de Sistemas/API",
    description: "APIs robustas e sistemas escaláveis para impulsionar seu negócio!",
    details: [
      "APIs RESTful e GraphQL bem documentadas",
      "Arquitetura de microserviços",
      "Autenticação e autorização seguras",
      "Integração com bancos de dados relacionais e NoSQL",
      "Testes automatizados e CI/CD",
      "Documentação técnica completa"
    ],
    tech: ["JavaScript", "TypeScript", "Node.js", "Python", "PHP", "Express", "FastAPI", "Laravel"],
    projects: [
      {
        name: "API - Agendo Aqui",
        description: "API completa para sistema de agendamento",
        image: "https://cdn-icons-png.freepik.com/512/2165/2165004.png",
        link: "https://api-agendoaqui.infotech.app.br/"
      },
      {
        name: "API - Bolsistas Registro",
        description: "API para gerenciamento de bolsistas",
        image: "https://cdn-icons-png.freepik.com/512/2165/2165004.png",
        link: "https://api-bolsistasregistro.tecnomaub.site/"
      },
      {
        name: "API - SOS Gasosa",
        description: "API para sistema de localização de postos",
        image: "https://cdn-icons-png.freepik.com/512/2165/2165004.png",
        link: "https://api-sosgasosa.tecnomaub.site/"
      },
      {
        name: "API - Grandes Mamíferos",
        description: "API para dashboard de monitoramento",
        image: "https://cdn-icons-png.freepik.com/512/2165/2165004.png",
        link: "https://api-serradomar.tecnomaub.site/"
      },
      {
        name: "API - Rupia Wallet",
        description: "API para sistema de carteira digital",
        image: "https://cdn-icons-png.freepik.com/512/2165/2165004.png",
        link: "https://api-rupiawallet.tecnomaub.site/"
      }
    ]
  },
  web: {
    icon: "bx-code-block",
    title: "Desenvolvimento WEB",
    description: "Sites modernos, responsivos e de alta performance!",
    details: [
      "Desenvolvimento full-stack com Laravel e React",
      "Design responsivo que funciona em todos os dispositivos",
      "Otimização SEO para melhor visibilidade",
      "Integração com APIs de terceiros",
      "Sistemas de autenticação e gerenciamento de usuários",
      "Performance otimizada e carregamento rápido"
    ],
    tech: ["Laravel", "React", "Vue.js", "JavaScript", "PHP", "MySQL", "PostgreSQL", "Tailwind CSS"],
    projects: [
      {
        name: "Framework Infotech",
        description: "Sistema web completo migrado de desktop",
        image: "assets/images/Infotech.png",
        link: "https://fw.infotech-solucoes.com/"
      },
      {
        name: "Smart Harpia",
        description: "Dashboard para dados de protótipos em campo",
        image: "assets/images/smartharpia.png",
        link: "http://85.31.63.241:8084/"
      },
      {
        name: "Grandes Mamíferos",
        description: "Sistema de controle de acessos e dashboard",
        image: "assets/images/serradomar.jpg",
        link: "https://grandesmamiferos.tecnomaub.site/"
      }
    ]
  },
  app: {
    icon: "bxl-android",
    title: "Desenvolvimento de App",
    description: "Aplicativos nativos e multiplataforma que seus usuários vão adorar!",
    details: [
      "Desenvolvimento com React Native (iOS e Android)",
      "Design nativo e experiência de usuário intuitiva",
      "Integração com APIs e serviços backend",
      "Notificações push e offline-first",
      "Publicação nas lojas (Google Play e App Store)",
      "Manutenção e atualizações contínuas"
    ],
    tech: ["React Native", "JavaScript", "TypeScript", "Expo", "Firebase", "Redux"],
    projects: [
      {
        name: "Diaria Aqui",
        description: "App de gerenciamento de serviços e divulgação",
        image: "assets/images/diariaaqui.png",
        link: "downloads/diariaaqui.apk",
        download: true
      },
      {
        name: "Eco-Guardiões",
        description: "App do jogo educativo",
        image: "assets/images/eco.jpg",
        link: "downloads/EcoGuardioes.apk",
        download: true
      }
    ]
  },
  powerbi: {
    icon: "bx-signal-3",
    title: "Desenvolvimento de Power BI",
    description: "Dashboards interativos e análises de dados que geram insights valiosos!",
    details: [
      "Criação de dashboards interativos e visuais",
      "Conectores com múltiplas fontes de dados",
      "Relatórios automatizados e atualizações em tempo real",
      "Links públicos para compartilhamento",
      "Modelagem de dados e DAX avançado",
      "Treinamento para equipes"
    ],
    tech: ["Power BI", "DAX", "Power Query", "SQL", "Excel"],
    projects: [
      {
        name: "Dashboard Agrícola",
        description: "Dashboard interativo para análise de colheita",
        image: "assets/images/base.png",
        link: "pages/dashboard_fazenda.html"
      }
    ]
  },
  spreadsheet: {
    icon: "bx-spreadsheet",
    title: "Desenvolvimento de Planilhas",
    description: "Automação inteligente que transforma dados em decisões!",
    details: [
      "Planilhas automatizadas com fórmulas complexas",
      "Dashboards dinâmicos em Excel/Google Sheets",
      "Integração com APIs e bancos de dados",
      "Macros e scripts personalizados",
      "Automação de processos repetitivos",
      "Soluções desktop e online"
    ],
    tech: ["Excel", "Google Sheets", "VBA", "Apps Script", "Python", "Power Automate"],
    projects: [
      {
        name: "Dashboard Fazenda",
        description: "Sistema completo de análise agrícola",
        image: "assets/images/base.png",
        link: "pages/dashboard_fazenda.html"
      }
    ]
  }
};

// Função para abrir o modal
function openServiceModal(serviceKey) {
  const modal = document.getElementById("serviceModal");
  const modalBody = document.getElementById("serviceModalBody");
  const service = servicesData[serviceKey];

  if (!service) return;

  let projectsHTML = "";
  if (service.projects && service.projects.length > 0) {
    projectsHTML = `
      <div class="service-modal-projects">
        <h3><i class="bx bx-folder-open"></i> Projetos Relacionados</h3>
        <div class="service-project-list">
          ${service.projects.map(project => `
            <div class="service-project-item">
              <img src="${project.image}" alt="${project.name}" onerror="this.src='assets/images/base.png'">
              <h4>${project.name}</h4>
              <p>${project.description}</p>
              ${project.download ? 
                `<a href="${project.link}" download><i class="bx bx-download"></i> Baixar</a>` :
                `<a href="${project.link}" target="_blank"><i class="bx bx-link-external"></i> Ver Projeto</a>`
              }
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  modalBody.innerHTML = `
    <div class="service-modal-header">
      <i class="bx ${service.icon}"></i>
      <h2>${service.title}</h2>
      <p>${service.description}</p>
    </div>
    <div class="service-modal-description">
      <h3><i class="bx bx-info-circle"></i> Detalhes do Serviço</h3>
      <ul style="list-style: none; padding: 0;">
        ${service.details.map(detail => `<li style="font-size: 1.6rem; line-height: 1.8; color: var(--text-color); margin-bottom: 1rem; padding-left: 2rem; position: relative;">
          <i class="bx bx-check-circle" style="position: absolute; left: 0; color: var(--main-color); font-size: 1.8rem;"></i>
          ${detail}
        </li>`).join("")}
      </ul>
      <div class="service-modal-tech">
        <h3 style="font-size: 1.8rem; color: var(--main-color); margin-bottom: 1rem; width: 100%;">Tecnologias Utilizadas:</h3>
        ${service.tech.map(tech => `<span>${tech}</span>`).join("")}
      </div>
    </div>
    ${projectsHTML}
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Função para fechar o modal
function closeServiceModal() {
  const modal = document.getElementById("serviceModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Event listeners para os cards de serviços
document.addEventListener("DOMContentLoaded", function() {
  const serviceBoxes = document.querySelectorAll(".services-box");
  const closeBtn = document.querySelector(".service-modal-close");
  const modal = document.getElementById("serviceModal");

  serviceBoxes.forEach(box => {
    box.addEventListener("click", function() {
      const serviceKey = this.getAttribute("data-service");
      if (serviceKey) {
        openServiceModal(serviceKey);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeServiceModal);
  }

  if (modal) {
    modal.addEventListener("click", function(e) {
      if (e.target === modal) {
        closeServiceModal();
      }
    });
  }

  // Fechar com ESC
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeServiceModal();
    }
  });
});