// script.js
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const leftButton = document.querySelector('.left');
    const rightButton = document.querySelector('.right');
    const imageCounter = document.querySelector('.image-counter');
    let currentIndex = 0;

    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        imageCounter.textContent = `Изображение ${index + 1} из ${slides.length}`;
    }

    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateSlide(currentIndex);
    });

    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateSlide(currentIndex);
    });

    updateSlide(currentIndex);
});