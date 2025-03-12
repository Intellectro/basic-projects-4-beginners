const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn=>{
    btn.addEventListener('click', (e) =>{
        const item = e.currentTarget.classList;
        const offset = (item.contains('next')) ? 1 : -1;
        const getParent = btn.closest('[data-parent]');
        const getSlides = getParent.querySelector('.product-flex-box');
        const activeSlide = getSlides.querySelector('[data-active]');
        let newIndex = [...getSlides.children].indexOf(activeSlide) + offset;

        if (newIndex >= getSlides.children.length){ 
            newIndex = 0;
        };
        if (newIndex < 0) {
            newIndex = getSlides.children.length - 1;
        };
        getSlides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})