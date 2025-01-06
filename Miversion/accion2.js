document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');

    function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
      });
  }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);

    showSlide(currentSlide);

    setInterval(nextSlide, 3000);

    let form = document.getElementById('1-2');

form.addEventListener('click', function() {
  let formElement = document.getElementById('form');
formElement.scrollIntoView({ behavior: 'smooth' });
});

  function presionarBoton() {
    // capturar los valores de los inputs
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('message').value;
    // enviar los valores en un objeto a la consola
    

    if(nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, complete todos los campos');
      return;
    }

    // mostrar un mensaje de alerta
    alert('Gracias por enviar tu mensaje, revisa la consola por favor');
    console.log({nombre, email, mensaje});
    // limpiar los inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
});