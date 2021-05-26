function moveSlide(n) {
    slideId+=n
    slideId>2?slideId=0:null
    slideId<0?slideId=2:null
    slider.map(slide=>slide.style.display='none')
    slider[slideId].style.display='flex'
}
function showMenu() {
    show=!show;
    if(show===true) {
        navbar.style.display='flex'
        button.classList.add('open')
    }
    if(show===false) {
        navbar.style.display='none'
        button.classList.remove('open')
    }
}

let slider = [...document.getElementsByClassName('carousel__content')];
if(slider.length!==0) {
    for (let i = 0; i < slider.length; i++) {
        slider[i].style = 'display: none'
    }
    slider[1].style='display: flex';
}
let slideId = 1;

let show = false;
let navbar = document.querySelector('.navbar__links');
let button = document.querySelector('.navbar__button')
