// let buttons = document.querySelectorAll('.btn');
// buttons.forEach(btn=>{
//     btn.addEventListener('click', (e)=>{
//         const targetClass = e.currentTarget.classList;
//         const offset = (targetClass.contains('second'))? 1 : -1;
//         const getParent = btn.closest('[data-carousel]').querySelector('[data-slides]');
//         const activeSlide = getParent.querySelector('[data-active]');
//         const getSlide = getParent.querySelectorAll('.slide');
//         let arraized = [...getSlide].indexOf(activeSlide) + offset;

//         if (arraized > getSlide.length - 1) arraized = 0;
//         if (arraized < 0) arraized = getSlide.length - 1;

//         getParent.children[arraized].dataset.active = true;
//         delete activeSlide.dataset.active;
//     })
// })

let buttons = document.querySelectorAll('.btn');
buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        const offset = btn.dataset.carouselButton === "second" ? 1 : -1;
        const getContainer = btn.closest('[data-carousel]');
        const getSlides = getContainer.querySelector('[data-slides]');
        const activeSlide = getSlides.querySelector('[data-active]')
        let newIndex = [...getSlides.children].indexOf(activeSlide) + offset;

        if (newIndex > (getSlides.children.length) - 1) newIndex = 0;
        if (newIndex < 0) newIndex = getSlides.children.length - 1;

        getSlides.children[newIndex].dataset.active = false;
        delete activeSlide.dataset.active;
    })
})