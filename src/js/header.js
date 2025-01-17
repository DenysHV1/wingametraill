export const header = () => {
  const openMenuBtn = document.querySelector('.burger_menu-js');
  const closeMenuBtn = document.querySelector('.close-menu-js');
  const menu = document.querySelector('.mobile-nav-js');
  const menuItems = document.querySelectorAll('.mobile-menu-item-js');

  openMenuBtn.addEventListener('click', () => {
    menu.classList.add('is-open');
  });

  closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.remove('is-open');
    });
  });
};
