
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

// about us 
// Simple scroll animation
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

let scrollStep = 250; // Increase for bigger slide

rightBtn.addEventListener("click", () => {
    slider.scrollLeft += scrollStep;
});

leftBtn.addEventListener("click", () => {
    slider.scrollLeft -= scrollStep;
});
