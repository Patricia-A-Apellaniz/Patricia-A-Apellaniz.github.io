document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector(".projects-carousel__track");
    const slides = Array.from(carousel.querySelectorAll(".projects-carousel__slide"));
    const prevBtn = carousel.querySelector(".projects-carousel__button--prev");
    const nextBtn = carousel.querySelector(".projects-carousel__button--next");
    const dotsContainer = carousel.querySelector(".projects-carousel__dots");

    if (!track || slides.length === 0) return;

    let currentIndex = 0;

    const updateCarousel = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      const dots = dotsContainer.querySelectorAll(".projects-carousel__dot");
      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === currentIndex);
      });

      const hasMultipleSlides = slides.length > 1;
      if (prevBtn) prevBtn.style.display = hasMultipleSlides ? "inline-flex" : "none";
      if (nextBtn) nextBtn.style.display = hasMultipleSlides ? "inline-flex" : "none";
      if (dotsContainer) dotsContainer.style.display = hasMultipleSlides ? "flex" : "none";
    };

    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "projects-carousel__dot";
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        updateCarousel();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        updateCarousel();
      });
    }

    updateCarousel();
  });
});