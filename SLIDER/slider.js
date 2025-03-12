const sliderContainer = document.querySelector('.slider-container');

function autoSlider(){
    const sliderWidth = sliderContainer.getBoundingClientRect().width;
    setTimeout(() => {
        sliderContainer.scrollLeft += sliderWidth;
        if (sliderContainer.scrollLeft > (sliderWidth + 30)){
            sliderContainer.scrollLeft = 0;
        }
        autoSlider()
    },5000)
}
autoSlider()