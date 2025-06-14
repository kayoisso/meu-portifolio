// Menu responsivo: abre/fecha o menu ao clicar no ícone

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Envio do formulário de contato para o WhatsApp

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


// Carrossel de projetos: mostra 4 cards por vez e navega com as setas
document.addEventListener('DOMContentLoaded', function() {
  const track = document.getElementById('carousel-track');
  const btnLeft = document.getElementById('carousel-left');
  const btnRight = document.getElementById('carousel-right');
  const cardWidth = 340; // largura do card + gap

  btnLeft.addEventListener('click', () => {
    track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  btnRight.addEventListener('click', () => {
    track.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });
});