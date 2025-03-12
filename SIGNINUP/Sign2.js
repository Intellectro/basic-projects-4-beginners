let buttons = document.querySelectorAll('.button');
let i;
for (i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    console.log(button);
    button.addEventListener('click', ()=>{
        let getParent = button.parentElement.parentElement.parentElement.parentElement;
        let mainParent = getParent.closest('.swiper-container');
        if (button.classList.contains('signinBtn')){
            mainParent.classList.toggle('left');
        }else{
            mainParent.classList.toggle('right');
        }
    })
}