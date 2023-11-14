'use strict'
const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const closeBtn = modal.querySelector('.popup-close');

  let count = 0;
  let idInterval;

  const screenWidth = document.documentElement.clientWidth

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      if (screenWidth > 768) {modalAnimate()}
    })
  })

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
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
  
}

export default modal