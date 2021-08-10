document.querySelector('.menu-btn').addEventListener('click', ()=> {
    document.querySelector('.nav-menu').classList.toggle('show');
});


const textos = document.querySelectorAll('.contenedor'); 

document.querySelector('.botons').addEventListener('click', ()=> {
    alert('Saludo Enviado');
   textos.forEach(elem => elem.value = '');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards' , {delay: 500});
ScrollReveal().reveal('.cards-banner-one' , {delay: 500});
ScrollReveal().reveal('.cards-banner-two' , {delay: 500});
ScrollReveal().reveal('.formulario' , {delay: 500});