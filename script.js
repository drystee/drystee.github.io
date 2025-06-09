    particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#facc15"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5
      },
      "size": {
        "value": 3
      },
      "move": {
        "enable": true,
        "speed": 1.5
      }
    },
    "interactivity": {
      "detect_on":"canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        }
      }
    },
    "retina_detect": false
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0');
        entry.target.classList.add('animate-fadein');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fadein-on-scroll').forEach(el => observer.observe(el));

  const learnMore = document.getElementById('learn-more');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      learnMore.classList.add('opacity-0', 'pointer-events-none');
    } else {
      learnMore.classList.remove('opacity-0', 'pointer-events-none');
    }
  });