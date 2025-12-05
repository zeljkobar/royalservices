// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.style.overflow = navMenu.classList.contains("active")
    ? "hidden"
    : "";
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// Active navigation link on scroll
const sections = document.querySelectorAll("section[id]");

function highlightNavigation() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

    if (
      navLink &&
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightNavigation);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});

// Scroll reveal animation
const scrollRevealElements = document.querySelectorAll(
  ".feature-card, .service-card, .tour-card, .info-card"
);

function reveal() {
  scrollRevealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("scroll-reveal", "active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal(); // Initial check

// Contact Form Handler
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector(".btn-text");
    const btnLoading = submitBtn.querySelector(".btn-loading");
    
    // Show loading state
    submitBtn.disabled = true;
    btnText.style.display = "none";
    btnLoading.style.display = "inline-block";
    formMessage.textContent = "";
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Determine endpoint based on form fields
    const endpoint = data.pickup ? '/api/transfer' : '/api/contact';
    
    // Use relative URL so it works both locally and in production
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Redirect to thank you page
        window.location.href = '/thank-you.html';
      } else {
        formMessage.textContent = result.message || 'Failed to send message. Please try again.';
        formMessage.style.color = '#dc3545';
      }
    } catch (error) {
      console.error('Error:', error);
      formMessage.textContent = 'Failed to send message. Please try again later.';
      formMessage.style.color = '#dc3545';
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      btnText.style.display = "inline-block";
      btnLoading.style.display = "none";
    }
  });
}

// Lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// Performance: Debounce scroll events
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Optimize scroll events
window.addEventListener(
  "scroll",
  debounce(() => {
    highlightNavigation();
    reveal();
  }, 10)
);

// Add animation to hero on load
window.addEventListener("load", () => {
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.opacity = "1";
  }
});

// Handle image errors (show placeholder)
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", function () {
    this.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    this.style.display = "block";
    this.style.minHeight = "200px";
  });
});

// Click to call and email tracking (optional analytics)
document
  .querySelectorAll('a[href^="tel:"], a[href^="mailto:"]')
  .forEach((link) => {
    link.addEventListener("click", function () {
      const type = this.href.startsWith("tel:") ? "phone" : "email";
      console.log(`Contact initiated via ${type}: ${this.href}`);
      // You can add analytics tracking here
      // Example: gtag('event', 'contact', { method: type });
    });
  });

// External link handler
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.setAttribute("rel", "noopener noreferrer");
});

console.log("Royal Services Montenegro - Website loaded successfully! 🇲🇪");
