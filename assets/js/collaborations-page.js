document.addEventListener("DOMContentLoaded", () => {
    const railWrappers = document.querySelectorAll("[data-rail-wrapper]");

    railWrappers.forEach((wrapper) => {
        const rail = wrapper.querySelector("[data-rail]");
        const prevBtn = wrapper.querySelector("[data-rail-prev]");
        const nextBtn = wrapper.querySelector("[data-rail-next]");

        if (!rail || !prevBtn || !nextBtn) return;

        const getStep = () => {
            const firstCard = rail.querySelector(".collaborations-card");
            if (!firstCard) return rail.clientWidth * 0.9;

            const gap = parseFloat(window.getComputedStyle(rail).columnGap || window.getComputedStyle(rail).gap || 0);
            return firstCard.getBoundingClientRect().width + gap;
        };

        const updateButtons = () => {
            const maxScrollLeft = rail.scrollWidth - rail.clientWidth - 4;
            prevBtn.disabled = rail.scrollLeft <= 4;
            nextBtn.disabled = rail.scrollLeft >= maxScrollLeft;
        };

        prevBtn.addEventListener("click", () => {
            rail.scrollBy({left: -getStep(), behavior: "smooth"});
        });

        nextBtn.addEventListener("click", () => {
            rail.scrollBy({left: getStep(), behavior: "smooth"});
        });

        rail.addEventListener("scroll", updateButtons, {passive: true});
        window.addEventListener("resize", updateButtons);

        updateButtons();
    });

    const cardSliders = document.querySelectorAll("[data-card-slider]");

    cardSliders.forEach((slider) => {
        const track = slider.querySelector("[data-card-slider-track]");
        const dots = Array.from(slider.querySelectorAll("[data-card-slider-dot]"));
        const slides = Array.from(track ? track.children : []);

        if (!track || slides.length <= 1) return;

        let currentIndex = 0;
        let startX = 0;
        let currentX = 0;
        let isSwiping = false;

        const updateSlider = (index) => {
            currentIndex = index;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle("is-active", dotIndex === currentIndex);
            });
        };

        dots.forEach((dot) => {
            dot.addEventListener("click", () => {
                const index = Number(dot.dataset.cardSliderDot || 0);
                updateSlider(index);
            });
        });

        slider.addEventListener("touchstart", (event) => {
            startX = event.touches[0].clientX;
            currentX = startX;
            isSwiping = true;
        }, {passive: true});

        slider.addEventListener("touchmove", (event) => {
            if (!isSwiping) return;
            currentX = event.touches[0].clientX;
        }, {passive: true});

        slider.addEventListener("touchend", () => {
            if (!isSwiping) return;

            const deltaX = currentX - startX;

            if (Math.abs(deltaX) > 40) {
                if (deltaX < 0 && currentIndex < slides.length - 1) {
                    updateSlider(currentIndex + 1);
                } else if (deltaX > 0 && currentIndex > 0) {
                    updateSlider(currentIndex - 1);
                }
            }

            isSwiping = false;
        });

        updateSlider(0);
    });

});
