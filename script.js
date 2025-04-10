document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-menu a");
  
    // Toggle on hamburger click
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show-nav");
      toggleBtn.classList.toggle("active");
    });
  
    // Auto-close on link click
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show-nav");
        toggleBtn.classList.remove("active");
      });
    });
  });
  