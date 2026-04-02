// NAVBAR BACKGROUND COLOR ON SCROLL EFFECT
window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  if(nav) {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  }
});

// SMOOTH SCROLL FUNCTION FOR LINKS
function go(id){
  const element = document.getElementById(id);
  if(element) {
    element.scrollIntoView({behavior: "smooth"});
  }
}

// --- MOBILE MENU TOGGLE & LIGHTBOX ---
document.addEventListener("DOMContentLoaded", () => {
  
  // Mobile Hamburger Menu
  const mobileMenu = document.getElementById('mobile-menu');
  const navList = document.getElementById('nav-list');

  if(mobileMenu && navList) {
    mobileMenu.addEventListener('click', () => {
      navList.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('#nav-list li');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if(!link.classList.contains('nav-dropdown')) {
          navList.classList.remove('active');
        }
      });
    });
  }

  // Lightbox Image Zoom
  const galleryImages = document.querySelectorAll('.image-gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  if(lightbox && lightboxImg) {
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('show');
      });
    });

    lightbox.addEventListener('click', (e) => {
      if(e.target.id !== 'lightbox-img') {
        lightbox.classList.remove('show');
      }
    });
  }
});

// --- 100% BULLETPROOF REPEATING ANIMATIONS ---
function checkReveals() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  reveals.forEach(reveal => {
    const rect = reveal.getBoundingClientRect();
    
    // Check if the element is currently visible anywhere on the screen
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      reveal.classList.add("active");
    } else {
      // Remove class when off-screen so it animates again!
      reveal.classList.remove("active");
    }
  });
}

// Trigger animations instantly and on every scroll/resize
window.addEventListener("scroll", checkReveals);
window.addEventListener("resize", checkReveals);
window.addEventListener("load", checkReveals);
document.addEventListener("DOMContentLoaded", checkReveals);

// Force an immediate check
checkReveals();

// THE ULTIMATE FAILSAFE: If Netlify loads slowly, force show all images after 2 seconds
setTimeout(() => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(reveal => {
    reveal.classList.add("active");
  });
}, 2000);