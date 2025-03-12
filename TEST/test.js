// const sliderContainer = document.querySelector('.slider-container');
// const buttons = document.querySelectorAll('.btn');
// const sliderWidth = sliderContainer.getBoundingClientRect().width;

// buttons.forEach(button => {
//     button.addEventListener('click', (e)=>{
//         const getClass = e.currentTarget.classList;
//         if (getClass.contains('next')){
//             sliderContainer.scrollLeft += sliderWidth;
//             if (sliderContainer.scrollLeft > ((sliderWidth * 4) + 200)){
//                 sliderContainer.scrollLeft = 0;
//             }
//         }else{
//             sliderContainer.scrollLeft -= sliderWidth;
//             if (sliderContainer.scrollLeft < 2){
//                 sliderContainer.scrollLeft = (sliderWidth * 5);
//             }
//         }
//     })
// })

const sliderContainer = [...document.querySelectorAll('.slider-container')];
const nextBtn = [...document.querySelectorAll('.next')]
const prevBtn = [...document.querySelectorAll('.prev')]
sliderContainer.forEach((item, index) => {
    let itemWidth = parseInt(window.getComputedStyle(item).getPropertyValue('width'));
    nextBtn[index].addEventListener('click', ()=>{
        item.scrollLeft += itemWidth;
        if (item.scrollLeft > ((itemWidth * 4) + 120)){
            item.scrollLeft = 0;
        }
    });
    prevBtn[index].addEventListener('click', ()=>{
        item.scrollLeft -= itemWidth;
        if (item.scrollLeft <= 0){
            item.scrollLeft = (itemWidth * 5);
        }
    })
})