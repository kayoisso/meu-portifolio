const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("carousel-track");
  const btnLeft = document.getElementById("carousel-left");
  const btnRight = document.getElementById("carousel-right");
  const cards = Array.from(track.querySelectorAll("a"));
  let currentIndex = 0;

  function getVisibleCards() {
    return window.innerWidth <= 1024 ? 1 : 3;
  }

  function updateCarousel() {
    const visibleCards = getVisibleCards();
    cards.forEach((card, i) => {
      if (i >= currentIndex && i < currentIndex + visibleCards) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  btnLeft.addEventListener("click", () => {
    const visibleCards = getVisibleCards();
    if (currentIndex > 0) {
      currentIndex -= visibleCards;
      if (currentIndex < 0) currentIndex = 0;
      updateCarousel();
    }
  });

  btnRight.addEventListener("click", () => {
    const visibleCards = getVisibleCards();
    if (currentIndex < cards.length - visibleCards) {
      currentIndex += visibleCards;
      if (currentIndex > cards.length - visibleCards) currentIndex = cards.length - visibleCards;
      updateCarousel();
    }
  });

  window.addEventListener("resize", () => {
    // Garante que o índice não fique fora do limite ao redimensionar
    const visibleCards = getVisibleCards();
    if (currentIndex > cards.length - visibleCards) {
      currentIndex = Math.max(0, cards.length - visibleCards);
    }
    updateCarousel();
  });

  updateCarousel();
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactform');
  form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const numero = document.getElementById('phone').value;
    const sub = document.getElementById('sub').value;
    const mensagem = document.getElementById('msg').value;
    const texto = `Olá! Meu nome é ${nome}, meu numero e ${numero}, assunto ${sub}, %0AEmail: ${email},%0A${mensagem}`;
    window.open(`https://wa.me/5584996961157?text=${texto}`, '_blank');
  });
});