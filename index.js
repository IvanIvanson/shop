const menuBody = document.querySelector('.menu');
const menuClose = document.querySelector('.close');
document.addEventListener('click', menu);

function menu(event){
    if(event.target.closest('.header__item-menu')){
        menuBody.classList.toggle('_active');
    }
    else if(event.target.closest('.close')){
        menuBody.classList.remove('_active');
    }
}