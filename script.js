// Smooth Fade In Animation
document.addEventListener("DOMContentLoaded", function(){
    const topbar = document.querySelector(".topbar");

    topbar.style.opacity = "0";
    topbar.style.transform = "translateY(-20px)";
    topbar.style.transition = "all 0.8s ease";

    setTimeout(() => {
        topbar.style.opacity = "1";
        topbar.style.transform = "translateY(0)";
    }, 200);
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;

/* Create dots */
slides.forEach((_, i) => {
    const dot = document.createElement("span");
    if(i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);

    dot.addEventListener("click", () => {
        index = i;
        update();
    });
});

const dots = document.querySelectorAll(".dots span");

function update(){
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    update();
});

prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
});

setInterval(() => {
    index = (index + 1) % slides.length;
    update();
}, 8000);
const aboutSection = document.querySelector(".about");

function revealAbout(){
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(sectionTop < screenHeight - 100){
        aboutSection.classList.add("show");
    }
}

window.addEventListener("scroll", revealAbout);
const overviewSection = document.querySelector(".overview");

function revealOverview(){
    const sectionTop = overviewSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(sectionTop < screenHeight - 100){
        overviewSection.classList.add("show");
    }
}

window.addEventListener("scroll", revealOverview);
const projectsSection = document.querySelector(".projects");

function revealProjects(){

  const sectionTop = projectsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if(sectionTop < screenHeight - 100){
    projectsSection.classList.add("show");
  }

}

window.addEventListener("scroll", revealProjects);
const process = document.querySelector(".process");

window.addEventListener("scroll", () => {

const top = process.getBoundingClientRect().top;
const height = window.innerHeight;

if(top < height - 100){
process.classList.add("show");
}

});

