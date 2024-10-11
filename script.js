
const slides = document.querySelectorAll('.carossel img');
const ponto = document.querySelectorAll('.ponto span');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('atv', i === index);
        ponto[i].classList.toggle('atv', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

ponto.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

setInterval(nextSlide, 5000);

const customSlides = document.querySelectorAll('.custom-carousel .slide');
let customCurrentSlide = 0;

function showCustomSlide(index) {
    customSlides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    customCurrentSlide = index;
}

function nextCustomSlide() {
    customCurrentSlide = (customCurrentSlide + 1) % customSlides.length;
    showCustomSlide(customCurrentSlide);
}

setInterval(nextCustomSlide, 5000);  // Altera o slide a cada 5 segundos
