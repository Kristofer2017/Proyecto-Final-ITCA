const cards = document.querySelectorAll('.card img'); // Select all images inside cards
const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('.modal-content');
const closeButton = modal.querySelector('.close');

cards.forEach(cardImage => {
  cardImage.addEventListener('click', () => {
    const imageSrc = cardImage.src;
    modalImage.src = imageSrc;
    modal.style.display = 'block'; // Show the modal
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide the modal
});

window.addEventListener('click', (event) => {
  if (event.target === modal) { // Close modal by clicking outside
    modal.style.display = 'none';
  }
});
