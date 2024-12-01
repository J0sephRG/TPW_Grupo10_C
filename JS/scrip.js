const carrusel = document.getElementById('carrusel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

function showSlide(index) {
    // Asegura que el índice esté dentro del rango de slides
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    // Mueve el carrusel al slide correspondiente
    carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Eventos de los botones de navegación
prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});