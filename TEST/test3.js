const buttons = document.querySelectorAll('[data-fade-button]');
buttons.forEach(button => {
    button.addEventListener('click', (e)=>{
        const checkID = e.currentTarget.dataset.id;
        const offset = (checkID === "next")? 1 : -1;
        const fadeOutContainer = button.closest('[data-fade-out-container]');
        const fadeOutFlexBox = fadeOutContainer.querySelector('[data-fade-flexbox]');
        const activeBox = fadeOutFlexBox.querySelector('[data-active]');
        console.log(activeBox);

        let newIndex = [...fadeOutFlexBox.children].indexOf(activeBox) + offset;
        
        if (newIndex >= fadeOutFlexBox.children.length) newIndex = 0;
        if (newIndex < 0) newIndex = fadeOutFlexBox.children.length - 1;

        fadeOutFlexBox.children[newIndex].dataset.active = true;
        delete activeBox.dataset.active;
    })
})