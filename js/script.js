let menuIcon = document.querySelector('#menu-icon')
let navBar = document.querySelector('.navbar')
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

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
})