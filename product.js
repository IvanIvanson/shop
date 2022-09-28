const images = document.querySelectorAll('.slider__container .slider__cards .slider__cards_cards-item');
const sliderLine = document.querySelector('.slider__cards');
 let count = 0;
 let width;

 function init(){
     width = document.querySelector('.slider__container').offsetWidth;

     sliderLine.style.width = width*images.length + 'px';

     images.forEach(item => {
         item.style.width = width + 'px';
         item.style.height = 'auto';

     });
     rollSlider();
 }
 window.addEventListener('resize', init);
 init();

 document.querySelector('#prev').addEventListener('click', function(){
     count--;
     if(count < 0){
         count = images.length - 1;
     }
     rollSlider();
 });
 document.querySelector('#next').addEventListener('click', function(){
    count++;
    if(count >= images.length){
        count = 0;
    }
    rollSlider();
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}