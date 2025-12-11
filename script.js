
// navbar
const menuBtn = document.getElementById("menuBtn");
const menuList = document.getElementById("menuList");
const dropBtns = document.querySelectorAll(".dropBtn");

// MENU OPEN / CLOSE
menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("show");

    document.querySelector(".open-icon").style.display =
        menuList.classList.contains("show") ? "none" : "inline";

    document.querySelector(".close-icon").style.display =
        menuList.classList.contains("show") ? "inline" : "none";
});

// MOBILE DROPDOWN
dropBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (window.innerWidth > 768) return;

        e.preventDefault();

        const dropdown = btn.nextElementSibling;

        document.querySelectorAll(".dropMenu").forEach((menu) => {
            if (menu !== dropdown) menu.style.display = "none";
        });

        dropdown.style.display =
            dropdown.style.display === "flex" ? "none" : "flex";
    });
});

// DESKTOP CLICK DROPDOWN
document.querySelectorAll(".dropdown > .dropBtn").forEach(btn => {

    btn.addEventListener("click", function (e) {
        if (window.innerWidth < 769) return; 

        e.preventDefault();
        e.stopPropagation();

        const parent = btn.parentElement;

        document.querySelectorAll(".dropdown").forEach(d => {
            if (d !== parent) d.classList.remove("active");
        });

        // current toggle
        parent.classList.toggle("active");
    });

});

document.querySelector(".dropBtnArrow").addEventListener("click", function (e) {
    e.preventDefault();     
    e.stopPropagation();    

    const dropdown = this.closest(".dropdown"); 
    dropdown.classList.toggle("active");
});

// close dropdown when clicking outside
document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("active"));
});

document.querySelector(".closeDrop").addEventListener("click", () => {
    document.querySelector(".dropdown").classList.remove("active");
});


// about us 
const elements = document.querySelectorAll('[data-animate]');

function checkAnimation(){
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect().top;

    if(rect < triggerBottom){
      el.style.opacity = "1";
      el.style.transform = "translate(0,0)";
    }
  });
}

window.addEventListener('scroll', checkAnimation);
window.addEventListener('load', checkAnimation);

// Why Choose Us
const card = document.querySelectorAll("[data-animate]");

function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);


// product card 
// Simple hover animation (optional)
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = '0.3s';
  });
});

const buttons = document.querySelectorAll(".brand-filter .info");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        document.querySelector(".brand-filter .active")?.classList.remove("active");
        this.classList.add("active");
    });
});



// gallery 
document.querySelectorAll(".gallery-card").forEach(card => {
  card.addEventListener("mousemove", () => {
    card.style.transition = "0.2s";
  });
});

// form 
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your message has been sent!");
});

// top brands 
const slider = document.getElementById("slider");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let scrollStep = 250; 
let autoScrollSpeed = 1; 

// ---- INFINITE AUTO SCROLL ----
function autoScroll() {
    slider.scrollLeft += autoScrollSpeed;

    // If last reached → jump back smoothly
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
        slider.scrollLeft = 0;
    }
}

let autoPlay = setInterval(autoScroll, 10);

// ---- STOP AUTOSCROLL WHILE USER INTERACTS ----
slider.addEventListener("mouseenter", () => clearInterval(autoPlay));
slider.addEventListener("mouseleave", () => autoPlay = setInterval(autoScroll, 10));

leftBtn.addEventListener("mouseenter", () => clearInterval(autoPlay));
rightBtn.addEventListener("mouseenter", () => clearInterval(autoPlay));
leftBtn.addEventListener("mouseleave", () => autoPlay = setInterval(autoScroll, 10));
rightBtn.addEventListener("mouseleave", () => autoPlay = setInterval(autoScroll, 10));

// ---- MANUAL SCROLL ----
rightBtn.addEventListener("click", () => {
    slider.scrollLeft += scrollStep;
});

leftBtn.addEventListener("click", () => {
    slider.scrollLeft -= scrollStep;
});


