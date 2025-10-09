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
    name: "Rupia Wallet",
    url: "https://rupiawallet.tecnomaub.site/",
    img: "https://rupiawallet.tecnomaub.site/logo.png",
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
