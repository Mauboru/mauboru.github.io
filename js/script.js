let menuIcon = document.querySelector('#menu-icon')
let navBar = document.querySelector('.navbar')
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

// remove

const typed = new Typed('.multiple-text', {
    strings: [
        'Back-End developer', 
        'Violinist', 
        'Rabequista',
        'Games developer',
        'Python developer'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}); 

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
    
    menuIcon.classList.remove('bx-x')
    navBar.classList.remove('active')
}

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' })
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ', { origin: 'bottom' })
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' })
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' })

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".br").addEventListener("click", function() {
        var navbarLinks = document.querySelectorAll(".navbar a");
        var btns = document.querySelectorAll(".btn");

        btns.forEach(function(btn) {
            btn.textContent = "Leia Mais";
        });

        navbarLinks[0].textContent = "Home";
        navbarLinks[1].textContent = "Sobre";
        navbarLinks[2].textContent = "Serviços";
        navbarLinks[3].textContent = "Portfólio";
        navbarLinks[4].textContent = "Contato";
        document.querySelector(".language-selected").classList.remove("change-en");
        document.querySelector(".language-selected").classList.add("change-br");

        document.querySelector(".home h3").innerHTML = "Eu sou um <span class='multiple-text'>Violinista</span>";
        document.querySelector(".home p").textContent = "Sou Josué, um Developer apaixonado por transformar ideias em experiências cativantes. Navegue pelo meu portfólio para explorar uma coleção única de projetos que refletem minha dedicação à inovação, design e criatividade.";
        document.querySelector(".home .btn").textContent = "Baixar Curriculo";

        document.querySelector(".about h2").innerHTML = "Sobre <span>Mim</span>";
        document.querySelector(".about h3").textContent = "Violinista e Programador!";
        document.querySelector(".about .p1").textContent = "Desde pequeno tive uma paixão muito grande pela música e tecnologia!";
        document.querySelector(".about .p2").textContent = "Com o passar do tempo fui me especializando nas duas áreas, comecei estudando violão, depois outros instrumentos e então fui para o violino, onde depositei todo meu esforço e dedicação deixando assim de lado os outros instrumentos com o intuito de me profissionalizar."
        document.querySelector(".about .p3").textContent = "Me dediquei também a programação, começando com projetos de jogos 'Drag and Drop' e então evoluindo para então outras engines e só então as linguagens de programação.";
        
        document.querySelector(".services .heading").innerHTML = "Meus <span>Serviços</span>";
        document.querySelector(".services .game h3").textContent = "Desenvolvimento de Jogos";
        document.querySelector(".services .game p").textContent = "Criação de jogos 2D, traga sua idéia e deixe a ganhar vida!";
        document.querySelector(".services .code h3").textContent = "Desenvolvimento de Sistemas";
        document.querySelector(".services .code p").textContent = "Criação de sistemas com banco de dados em Java e Python!";
        document.querySelector(".services .data h3").textContent = "Desenvolvimento WEB";
        document.querySelector(".services .data p").textContent = "Criação de sites com conexão a banco de dados!";
        document.querySelector(".services .power h3").textContent = "Desenvolvimento de Power BI";
        document.querySelector(".services .power p").textContent = "Criação de dashboards com banco de dados!";
        document.querySelector(".services .spreadsheet h3").textContent = "Desenvolvimento de Planilhas";
        document.querySelector(".services .spreadsheet p").textContent = "Criação de planilhas (online/desktop) com automação.";

        document.querySelector(".portfolio h2").innerHTML = "Ultimos <span>Projetos</span>";

        document.querySelector(".contact h2").innerHTML = "Fale <span>Comigo!</span>";
        document.querySelector(".contact form .textname").placeholder = "Nome Completo";
        document.querySelector(".contact form .email").placeholder = "Endereço de Email";
        document.querySelector(".contact form .number").placeholder = "Número de Telefone";
        document.querySelector(".contact form .textemail").placeholder = "Assunto do Email";
        document.querySelector(".contact form textarea").placeholder = "Sua Mensagem!";
        document.querySelector(".contact form .btn").value = "Enviar Mensagem";
    });

    document.querySelector(".en").addEventListener("click", function() {
        var navbarLinks = document.querySelectorAll(".navbar a");
        var btns = document.querySelectorAll(".btn");

        btns.forEach(function(btn) {
            btn.textContent = "Read More";
        });

        navbarLinks[0].textContent = "Home";
        navbarLinks[1].textContent = "About";
        navbarLinks[2].textContent = "Services";
        navbarLinks[3].textContent = "Portfolio";
        navbarLinks[4].textContent = "Contact";
        document.querySelector(".language-selected").classList.remove("change-br");
        document.querySelector(".language-selected").classList.add("change-en");

        document.querySelector(".home h3").innerHTML = "I'm a <span class='multiple-text'>Python Developer</span>";
        document.querySelector(".home p").textContent = "I'm Josué, a Developer passionate about transforming ideas into captivating experiences. Browse my portfolio to explore a unique collection of projects that reflect my dedication to innovation, design and creativity.";
        document.querySelector(".home .btn").textContent = "Download Curriculum";

        document.querySelector(".about h2").innerHTML = "About <span>Me</span>";
        document.querySelector(".about h3").textContent = "Violinist and Programmer!";
        document.querySelector(".about .p1").textContent = "Since I was little, I've had a huge passion for music and technology!";
        document.querySelector(".about .p2").textContent = "As time went by, I specialized in both areas, I started studying guitar, then other instruments and then I switched to violin, where I put all my effort and dedication aside, leaving other instruments aside with the aim of becoming a professional."
        document.querySelector(".about .p3").textContent = "I also dedicated myself to programming, starting with 'Drag and Drop' game projects and then evolving to other engines and only then programming languages.";
   
        document.querySelector(".services .heading").innerHTML = "My <span>Services</span>";
        document.querySelector(".services .game h3").textContent = "Games Development";
        document.querySelector(".services .game p").textContent = "Creation of 2D games, bring your idea and let it come to life!";
        document.querySelector(".services .code h3").textContent = "Systems Development";
        document.querySelector(".services .code p").textContent = "Creation of systems with databases in Java and Python!";
        document.querySelector(".services .data h3").textContent = "WEB Development";
        document.querySelector(".services .data p").textContent = "Creation of websites with database connection!";
        document.querySelector(".services .power h3").textContent = "Power BI Development";
        document.querySelector(".services .power p").textContent = "Creation of dashboards with database!";
        document.querySelector(".services .spreadsheet h3").textContent = "Spreadsheet Development";
        document.querySelector(".services .spreadsheet p").textContent = "Creation of spreadsheets (online/desktop) with automation.";

        document.querySelector(".portfolio h2").innerHTML = "Last <span>Projects</span>";

        document.querySelector(".contact h2").innerHTML = "Talk to <span>Me!</span>";
        document.querySelector(".contact form .textname").placeholder = "Full Name";
        document.querySelector(".contact form .email").placeholder = "Email Address";
        document.querySelector(".contact form .number").placeholder = "Phone Number";
        document.querySelector(".contact form .textemail").placeholder = "Email Subject";
        document.querySelector(".contact form textarea").placeholder = "Your Message!";
        document.querySelector(".contact form .btn").value = "Send Message";
    });
});

!(function(){const sc=document.createElement('script');sc.src="https://apps.voc.ai/api_v2/gpt/bots/livechat/embed.js?id=14518&token=662C1384E4B06FCDC79360D8";sc.async=true;sc.defer=true;document.body.appendChild(sc);})()

document.getElementById("sendEmailButton").addEventListener("click", function () {
    const form = document.getElementById("contactForm");
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const emailSubject = form.emailSubject.value;
    const message = form.message.value;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(`Nome: ${fullName}\nTelefone: ${phoneNumber}\n\nMensagem:\n${message}`)}`;

    window.location.href = mailtoLink;
});