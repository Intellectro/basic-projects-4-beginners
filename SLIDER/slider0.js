const sliderContainer = document.querySelector('.slider-container');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slides = Array.from(sliderContainer.children);
console.log(slides);

let counter = 0;

slides.forEach((slide, index)=> {
    slide.style.left = `${index * 100}%`;
})

nextBtn.addEventListener('click', ()=>{
    counter++;
    carousel();
})
prevBtn.addEventListener('click', ()=>{
    counter--;
    carousel();
})

function carousel(){
    if (counter === slides.length){
        counter = 0;
    }
    if (counter < 0){
        counter = slides.length - 1;
    }
    slides.forEach(slide =>{
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}