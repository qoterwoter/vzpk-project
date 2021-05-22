let slider = [...document.getElementsByClassName('carousel__content')];
for (let i = 0; i < slider.length; i++) {
    slider[i].style = 'display: none'
}
slider[1].style='display: flex';
let slideId = 1;
function moveSlide(n) {
    slideId+=n
    slideId>2?slideId=0:null
    slideId<0?slideId=2:null
    slider.map(slide=>slide.style.display='none')
    slider[slideId].style.display='flex'
}