const swiperContainer = document.querySelector('.swiper-container');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots-container');
const swiperWidth = swiperContainer.getBoundingClientRect().width;


nextBtn.addEventListener('click', ()=>{
    swiperContainer.scrollLeft += swiperWidth;
    console.log(swiperContainer.scrollLeft);
    if (swiperContainer.scrollLeft >= ((swiperWidth * 2))){
        swiperContainer.scrollLeft = 0;
    }
});

prevBtn.addEventListener('click', ()=>{
    swiperContainer.scrollLeft -= swiperWidth;
    if (swiperContainer.scrollLeft <= 0){
        swiperContainer.scrollLeft = (swiperWidth * 2);
    }
});

let getChildren = [...dotsContainer.children];
getChildren.forEach(child =>{
    child.addEventListener('click', (e)=>{
        let className = e.currentTarget.classList;
        if (className.contains('first')){
            swiperContainer.scrollLeft = 0;
        }else if (className.contains('sec')){
            swiperContainer.scrollLeft = (swiperWidth);
        }else{
            swiperContainer.scrollLeft = (swiperWidth * 2);
        }
    })
})