// Enhanced JavaScript with smooth scrolling, animations, and interactivity
document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Back to top button visibility
    const backToTopButton = document.querySelector(".back-to-top")
  
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("visible")
      } else {
        backToTopButton.classList.remove("visible")
      }
    })
  
    // Sticky navigation
    const navbar = document.getElementById("navbar")
    const navbarHeight = navbar.offsetHeight
  
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > navbarHeight) {
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      } else {
        navbar.style.boxShadow = "none"
      }
    })
  
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll(".skill-progress")
  
    // Set initial width to 0
    skillBars.forEach((bar) => {
      bar.style.width = "0"
    })
  
    // Function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0
    }
  
    // Function to animate skill bars
    function animateSkillBars() {
      skillBars.forEach((bar) => {
        if (isInViewport(bar)) {
          const width = bar.parentElement.previousElementSibling.lastElementChild.textContent
          bar.style.width = width
        }
      })
    }
  
    // Animate elements on scroll
    function animateOnScroll() {
      const fadeElements = document.querySelectorAll(".fade-in")
  
      fadeElements.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains("appeared")) {
          element.classList.add("appeared")
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
  
      animateSkillBars()
    }
  
    // Set initial state for fade-in elements
    document.querySelectorAll(".fade-in").forEach((element) => {
      if (
        !element.classList.contains("delay-1") &&
        !element.classList.contains("delay-2") &&
        !element.classList.contains("delay-3")
      ) {
        element.style.opacity = "0"
        element.style.transform = "translateY(20px)"
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      }
    })
  
    // Run animations on scroll
    window.addEventListener("scroll", animateOnScroll)
  
    // Run once on page load
    animateOnScroll()
  
    // Form submission handling
    const contactForm = document.getElementById("contact-form")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form data
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the data to a server
        // For now, we'll just log it and show a success message
        console.log("Form submitted:", { name, email, message })
  
        // Show success message
        alert("¡Gracias por tu mensaje! Te contactaré pronto.")
  
        // Reset form
        contactForm.reset()
      })
    }
  
    // Project hover effects
    const projects = document.querySelectorAll(".project")
  
    projects.forEach((project) => {
      project.addEventListener("mouseenter", () => {
        project.style.transform = "translateY(-10px)"
        project.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)"
      })
  
      project.addEventListener("mouseleave", () => {
        project.style.transform = ""
        project.style.boxShadow = ""
      })
    })
  })
  
  // Función para abrir el modal con la imagen
function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Cerrar el modal al hacer clic en la "X"
document.querySelector(".close").addEventListener("click", closeModal);

// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener("click", (event) => {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
      closeModal();
  }
});