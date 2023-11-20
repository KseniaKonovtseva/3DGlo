const menu = () => {
  const body = document.querySelector('body')
  const menu = document.querySelector('menu');
  const menuItems = menu.querySelectorAll('ul>li>a');

  const handleMenu = () => {
    menu.classList.toggle('active-menu')
  }

  body.addEventListener('click', (e) => {
    if (e.target.closest('.menu')) {
      handleMenu()
    } else if (e.target.closest('ul>li>a')) {
      menuItems.forEach(() => handleMenu())
    } else if (!e.target.closest('.active-menu') || e.target.classList.contains('close-btn')) {
      menu.classList.remove('active-menu')
    }
  })
}

export default menu