'use strict'
const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');

  let count = 0;
  let idInterval;

  const screenWidth = document.documentElement.clientWidth

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      if (screenWidth > 768) {modalAnimate()}
    })
  })

  const modalAnimate = () => {
    count+=5
    idInterval = requestAnimationFrame(modalAnimate)

    if (count < 101) {
      modal.style.opacity = `${count}%`;
    } else {
      cancelAnimationFrame(idInterval)
      count = 0;
    }
  }

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
    }
  })
  
}

export default modal