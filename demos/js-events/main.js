const button = document.querySelector('.Button--toggle');
const modal = document.querySelector('.Modal');

modal.style.display = 'none';

button.addEventListener('click', () => {
  if (modal.style.display === 'none') {
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
});