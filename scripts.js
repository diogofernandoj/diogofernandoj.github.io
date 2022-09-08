// Navbar fixa
const nav = document.querySelector('#navbar')
document.body.onscroll = () => {
    if(window.pageYOffset>70) {
        nav.style.background = "#080808"
        nav.style.borderBottom = "2px solid #222"
    } else {
        nav.style.background = "transparent"
        nav.style.border = "none"
    }
}

// Scroll smooth
document.querySelector('.ilogo').addEventListener("click", function(event) {
    event.preventDefault();
    scrollTo('#showcase');
});

document.querySelector('.ihome').addEventListener("click", function(event) {
    event.preventDefault();
    scrollTo('#showcase');
});

document.querySelector('.iabout').addEventListener("click", function(event) {
    event.preventDefault();
    scrollTo('#about');
});

document.querySelector('.btn-explore').addEventListener("click", function(event) {
    event.preventDefault();
    scrollTo('#about');
});

document.querySelector('.iprojects').addEventListener("click", function(event) {
    event.preventDefault();
    scrollTo('#projects');
});

function scrollTo(e) {
    document.querySelector(e).scrollIntoView({ behavior: "smooth" });
    closeMenu()
}

function closeMenu() {
    const navbar = document.querySelector('.navbar-container')
    navbar.classList.remove("active")
}

// Menu mobile
const btnMenu = document.getElementById('menu-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector("#navbar");
    const navbar = document.querySelector('.navbar-container');

    navbar.classList.toggle("active")
}

btnMenu.addEventListener('touchstart', toggleMenu);
btnMenu.addEventListener('click', toggleMenu);

// Copiar email
function copiar() {
    const emailBtn = document.querySelector('.email-btn')

    if (navigator.clipboard.writeText('diogofernandoj@gmail.com')) {
        emailBtn.textContent = "Copiado!";
        emailBtn.style.background = "transparent";
        emailBtn.style.color = "#00D4FF";
    }

    setInterval(function () {
        emailBtn.textContent = "Copiar";
        emailBtn.style.background = "#00D4FF";
        emailBtn.style.color = "#000";
    }, 3000
    );
}

// Mostrar ou esconder projetos
const seeProjectsButton = document.querySelector('#see-projects-btn')
const seeTrendsButton = document.querySelector('#see-trends-btn')
const titleProjects = document.querySelector('.project-title')
const allProjects = document.querySelector('.projects-container')
const trendProjects = document.querySelector('.trend-container')
seeProjectsButton.addEventListener('click', () => {
    titleProjects.textContent = 'Projetos'
    trendProjects.classList.remove('active')
    allProjects.classList.add('active')
})

seeTrendsButton.addEventListener('click', () => {
    titleProjects.textContent = 'Destaques'
    allProjects.classList.remove('active')
    trendProjects.classList.add('active')
})

// Carrossel
let count = 1;
document.getElementById('slide1').checked = true

let timer = setInterval(nextImage, 3000)

function nextImage(){
    count++
    if(count>3) {
        count = 1
    }
    document.getElementById('slide'+count).checked = true;
}

const s1 = document.getElementById('slide1')
const s2 = document.getElementById('slide2')
const s3 = document.getElementById('slide3')

s1.addEventListener('click', function() {
    count = 1
    clearInterval(timer)
    timer = setInterval(nextImage, 3000)
})

s2.addEventListener('click', function() {
    count = 2
    clearInterval(timer)
    timer = setInterval(nextImage, 3000)
})

s3.addEventListener('click', function() {
    count = 3
    clearInterval(timer)
    timer = setInterval(nextImage, 3000)
})
