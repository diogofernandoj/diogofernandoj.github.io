// Navbar fixa
const nav = document.querySelector("#navbar-container");
document.body.onscroll = () => {
  if (window.scrollY > 70 && window.innerWidth >= 768) {
    nav.style.border = "none";
    nav.style.borderBottom = "1px solid #222";
  } else if (window.innerWidth >= 768 && window.scrollY <= 70) {
    nav.style.border = "none";
  } else {
    nav.style.borderTop = "1px solid #222";
  }
};

// Scroll smooth
document.querySelector(".logo").addEventListener("click", function () {
  scrollTo("#home-container");
});

document.querySelector(".home-btn").addEventListener("click", function () {
  scrollTo("#home-container");
});

document.querySelector(".about-btn").addEventListener("click", function () {
  scrollTo("#about-container");
});

document.querySelector(".btn-explore").addEventListener("click", function () {
  scrollTo("#about-container");
});

document.querySelector(".projects-btn").addEventListener("click", function () {
  scrollTo("#projects-container");
});

function scrollTo(e) {
  document.querySelector(e).scrollIntoView({ behavior: "smooth" });
  closeMenu();
}

function closeMenu() {
  nav.classList.remove("active");
}

// Abrir contacts section
const contactsContainer = document.querySelector("#contacts-container");
const contactsBtn = document.querySelector(".contacts-btn");
const closeContactsBtn = document.querySelector(".fa-xmark");

contactsBtn.addEventListener("click", () => {
  closeMenu();
  contactsContainer.classList.add("active");
});
closeContactsBtn.addEventListener("click", () => {
  contactsContainer.classList.remove("active");
});
contactsContainer.addEventListener("click", (e) => {
  if (e.target.id === "contacts-container") {
    contactsContainer.classList.remove("active");
  }
});

// Menu mobile
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Copiar email
function copiar() {
  const copyEmailBtn = document.querySelector(".copy-btn");

  if (navigator.clipboard.writeText("diogofernandoj@gmail.com")) {
    copyEmailBtn.innerText = "Copiado!";
  }

  setInterval(function () {
    copyEmailBtn.innerHTML = `Copiar <i class="fa-regular fa-copy"></i>`;
  }, 3000);
}

// Carrossel
let cont = 1;

let timer = setInterval(nextImage, 3000);

function nextImage() {
  cont++;
  if (cont > 4) {
    cont = 1;
  }
  document.getElementById("slide" + cont).checked = true;
}

const s1 = document.getElementById("slide1");
const s2 = document.getElementById("slide2");
const s3 = document.getElementById("slide3");
const s4 = document.getElementById("slide4");

s1.addEventListener("click", function () {
  cont = 1;
  clearInterval(timer);
  timer = setInterval(nextImage, 3000);
});

s2.addEventListener("click", function () {
  cont = 2;
  clearInterval(timer);
  timer = setInterval(nextImage, 3000);
});

s3.addEventListener("click", function () {
  cont = 3;
  clearInterval(timer);
  timer = setInterval(nextImage, 3000);
});

s4.addEventListener("click", function () {
  cont = 4;
  clearInterval(timer);
  timer = setInterval(nextImage, 3000);
});

const cards = document.querySelectorAll(".cards label");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    if (document.getElementById(card.className).checked == true) {
      clearInterval(timer);
      timer = false;
    }
  });
  card.addEventListener("mouseleave", () => {
    if (timer == false) {
      timer = setInterval(nextImage, 3000);
    }
  });
});

// Setas
const rightBtn = document.querySelector(".fa-chevron-right");
const leftBtn = document.querySelector(".fa-chevron-left");

rightBtn.addEventListener("click", () => {
  nextImage();
  clearInterval(timer);
  timer = setInterval(nextImage, 3000);
});
leftBtn.addEventListener("click", () => {
  cont = cont - 1;
  if (cont === 0) {
    cont = 4;
  }
  document.getElementById("slide" + cont).checked = true;
  clearInterval(timer);
  timer = setInterval(nextImage, 3000);
});
