const cards = document.querySelectorAll('.card img'); // Selecciona todas las imágenes dentro de las tarjetas.
const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('.modal-content');
const closeButton = modal.querySelector('.close');

cards.forEach(cardImage => {
  cardImage.addEventListener('click', () => {
    const imageSrc = cardImage.src;
    modalImage.src = imageSrc;
    modal.style.display = 'block'; // Mostrar el modal
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none'; // Ocultar el modal
});

window.addEventListener('click', (event) => {
  if (event.target === modal) { //Cerrar modal haciendo clic fuera
    modal.style.display = 'none';
  }
});
