const ic_menu = document.querySelector('.menu-mobile');
const popupMenu = document.querySelector('.poup-menu-mobile');
const bgMenu = document.querySelector('.bg-menu-mobile');

let isClick = false;


ic_menu.addEventListener('click', ()=> {
  // ic_menu.style.le
  bgMenu.style.left = "0px";

})

bgMenu.addEventListener('click', ()=> {
  console.log(bgMenu.classList.contains('poup-menu-mobile'));
})