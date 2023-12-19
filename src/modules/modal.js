'use strict'
import { animate } from "./helpers";

const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');

  const screenWidth = document.documentElement.clientWidth
  const mobile = window.matchMedia("(max-width: 768px)");

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      // if (screenWidth > 768) {
      if (!mobile.matches) {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.opacity = progress;
          }
        });
      }
    })
  })

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
    }
  })
}

export default modal