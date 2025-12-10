
/* ----------------------------
   TU CÓDIGO DEL CARRUSEL
-----------------------------*/
const track = document.querySelector('.carousel-track');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');
const cards = document.querySelectorAll('.card');

let currentIndex = 0;
const visibleCards = 4;

btnRight.addEventListener('click', () => {
  if (currentIndex < cards.length - visibleCards) {
    currentIndex++;
    updateCarousel();
  }
});

btnLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

function updateCarousel() {
  const moveX = currentIndex * (cards[0].offsetWidth + 24); // 24px = gap
  track.style.transform = `translateX(-${moveX}px)`;
}



