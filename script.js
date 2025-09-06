// Add current year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("main-nav");
toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
