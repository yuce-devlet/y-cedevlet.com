document.addEventListener("DOMContentLoaded", function () {
  // MENÜ AÇ/KAPAT
  const menuIcon = document.getElementById("menuIcon");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const closeMenu = document.getElementById("closeMenu");

  const inputs = document.querySelectorAll(".input")
  function focusfunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }
    function blurfunc() {
    let parent = this.parentNode;
    if(this.value == ""){
      parent.classList.remove("focus");
    }
  }

    inputs.forEach(input => {
    input.addEventListener("focus", focusfunc);
     input.addEventListener("blur", blurfunc);
  });

  if (menuIcon && mobileMenu && overlay && closeMenu) {
    menuIcon.addEventListener("click", () => {
      mobileMenu.classList.add("active");
      overlay.classList.add("active");
    });

    const closeAllMenus = () => {
      mobileMenu.classList.remove("active");
      overlay.classList.remove("active");
    };

    closeMenu.addEventListener("click", closeAllMenus);
    overlay.addEventListener("click", closeAllMenus);
  }

  // GALLERY SLIDER
  const gallerySlider = document.getElementById("gallerySlider");
  const galleryDots = document.getElementById("galleryDots");
  const galleryPrev = document.getElementById("galleryPrev");
  const galleryNext = document.getElementById("galleryNext");

  if (gallerySlider && galleryDots && galleryPrev && galleryNext) {
    const slides = document.querySelectorAll(".gallery-slide");
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Dot oluştur
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => moveToSlide(i));
      galleryDots.appendChild(dot);
    }

    function moveToSlide(index) {
      currentIndex = index;
      gallerySlider.style.transform = `translateX(-${index * 100}%)`;
      updateDots();
    }

    function updateDots() {
      const dots = galleryDots.querySelectorAll("span");
      dots.forEach(dot => dot.classList.remove("active"));
      if (dots[currentIndex]) dots[currentIndex].classList.add("active");
    }

    galleryPrev.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      moveToSlide(currentIndex);
    });

    galleryNext.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      moveToSlide(currentIndex);
    });

    // Başlangıçta
    updateDots();
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      moveToSlide(currentIndex);
    }, 5000);
  }

  // HERO SLIDER
  const heroSlides = document.querySelectorAll('.hero-slider .slide');
  if (heroSlides.length > 0) {
    let current = 0;

    function showSlide(index) {
      heroSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    showSlide(current);
    setInterval(() => {
      current = (current + 1) % heroSlides.length;
      showSlide(current);
    }, 8000);
  }

  // SAYI ANİMASYONU (STAT)
  function animateCount(el, target) {
    let count = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      el.innerText = count + (target >= 1000 ? "+" : "+");
    }, 20);
  }

  function revealStats() {
    const boxes = document.querySelectorAll('.stat-box');
    boxes.forEach(box => {
      const rect = box.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        box.classList.add("show");
        const countEl = box.querySelector(".count");
        const target = parseInt(box.dataset.count);
        if (!countEl.classList.contains("animated")) {
          animateCount(countEl, target);
          countEl.classList.add("animated");
        }
      }
    });
  }

  revealStats();
  window.addEventListener("scroll", revealStats);
});
const animItems = document.querySelectorAll('.animate');

function animateOnLoad() {
  animItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('visible');
    }, index * 100); // her birine ufak gecikme
  });
}

window.addEventListener('load', animateOnLoad);


document.addEventListener("DOMContentLoaded", () => {

  const inputs = document.querySelectorAll(".input");
  inputs.forEach(input => {
    input.addEventListener("focus", focusfunc);
    input.addEventListener("blur", blurfunc);
  });

  function focusfunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurfunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
});
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.7s ease';

    loader.addEventListener('transitionend', () => {
      loader.style.display = 'none';
      content.style.opacity = '1'; // fade-in içerik
    });
  }, 1500);
});
document.addEventListener("DOMContentLoaded", function () {
  // Hizmet kartlarını yakala
  document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      window.location.href = `hizmetler-detay.html?id=${id}`;
    });
  });

  // Proje kartlarını yakala
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      window.location.href = `proje-detay.html?id=${id}`;
    });
  });
});

