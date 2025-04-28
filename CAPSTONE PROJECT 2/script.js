document.addEventListener("DOMContentLoaded", function () {
    // Target elements and add animation base classes
    const elementsToAnimate = [
      { selector: ".text-container", animation: "rise-up" },
      { selector: ".image-container", animation: "fade-in" },
      { selector: ".introduction", animation: "rise-up" },
      { selector: ".education", animation: "slide-in-left" },
      { selector: ".skills", animation: "slide-in-right" },
      { selector: ".divider", animation: "fade-in" },
      { selector: ".touch", animation: "rise-up" },
      { selector: "footer", animation: "rise-up" }
    ];
  
    elementsToAnimate.forEach(item => {
      const element = document.querySelector(item.selector);
      if (element) {
        element.classList.add(item.animation);
      }
    });
  
    // IntersectionObserver for triggering/reversing animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // De-load
        }
      });
    }, {
      threshold: 0.15
    });
  
    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      ".fade-in, .rise-up, .slide-in-left, .slide-in-right"
    );
    animatedElements.forEach(el => observer.observe(el));
  });
  