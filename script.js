const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

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



