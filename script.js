document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
        const icon = mobileMenuButton.querySelector("i");
        if (mobileMenu.classList.contains("hidden")) {
          icon.classList.remove("ri-close-line");
          icon.classList.add("ri-menu-line");
        } else {
          icon.classList.remove("ri-menu-line");
          icon.classList.add("ri-close-line");
        }
      });
    }
  
    // Form validation
    const contactForm = document.querySelector("form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        if (!name || !email || !message) {
          alert("Veuillez remplir tous les champs obligatoires.");
          return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Veuillez entrer une adresse email valide.");
          return;
        }
        alert("Merci pour votre message ! Nous vous contacterons bientôt.");
        contactForm.reset();
      });
    }
  
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
          const mobileMenu = document.getElementById("mobile-menu");
          if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
            const icon = document.querySelector("#mobile-menu-button i");
            if (icon) {
              icon.classList.remove("ri-close-line");
              icon.classList.add("ri-menu-line");
            }
          }
        }
      });
    });
  });
  


  document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-images');

    carousels.forEach((carousel) => {
      const images = carousel.querySelectorAll('.carousel-img');
      let current = 0;

      setInterval(() => {
        images[current].classList.remove('opacity-100');
        images[current].classList.add('opacity-0');
        current = (current + 1) % images.length;
        images[current].classList.remove('opacity-0');
        images[current].classList.add('opacity-100');
      }, 4000); // Change toutes les 4 secondes
    });
  });