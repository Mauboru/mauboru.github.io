let menuIcon = document.querySelector('#menu-icon')
let navBar = document.querySelector('.navbar')
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

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
    delay: 200,
    mobile: false
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' })
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ', { origin: 'bottom' })
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' })
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' })

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