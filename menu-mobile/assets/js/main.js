const ic_menu = document.querySelector('.menu-mobile');
const popupMenu = document.querySelector('.poup-menu-mobile');
const bgMenu = document.querySelector('.bg-menu-mobile');

let isPopupOpen = false;


ic_menu.addEventListener('click', () => {
  bgMenu.style.left = "0px";
  isPopupOpen = true;
})

bgMenu.addEventListener('click', (event) => {
  if(event.target.classList.contains('bg-menu-mobile') === true ) {
    bgMenu.style.left = "-500%";
  }
})
