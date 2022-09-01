  const icon = document.querySelector('.icon');
  const nav = document.querySelector('nav');
  icon.addEventListener('click', () => {
    nav.classList.toggle('open-menu')
    icon.classList.toggle('open_menu_icon')
    if(nav.classList.contains('open-menu')){
      icon.classList.remove('icon')
      icon.classList.add('open_menu_icon')
    }else if(nav.classList.contains('open-menu')==false){
    icon.classList.remove('open_menu_icon')
    icon.classList.add('icon')
    }
});

