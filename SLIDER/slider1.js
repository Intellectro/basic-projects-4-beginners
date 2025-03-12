const buttons = document.querySelectorAll('.btn');
const sliderContainer = document.querySelector('.slider-container');
const slides = Array.from(sliderContainer.children);
slides.forEach((slide, index) =>{
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

buttons.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        if (btn.classList.contains("next")){
            counter++;
            slider()
        }else{
            counter--;
            slider();
        }
    })
})

function slider(){
    if (counter > slides.length - 1){
        counter = 0;
    }
    if (counter < 0){
        counter = slides.length - 1;
    }
    slides.forEach(slide =>{
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}