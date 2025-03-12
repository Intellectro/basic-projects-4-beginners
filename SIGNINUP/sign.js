let card1 = document.getElementById('signin');
let card2 = document.getElementById('signup');
let movingLeft = document.getElementById('left');
let movingRight = document.getElementById('right');
let mainCard = document.querySelector('.main');


function moveLeft(){
    card1.style.transform = 'translate(-36rem)';
    card2.style.transform = 'translate(0rem)';
    mainCard.classList.add('opacized')
}

function moveRight(){
    card1.style.transform = 'translate(0rem)';
    card2.style.transform = 'translate(36rem)';
}

movingLeft.addEventListener('click', ()=>{
    moveLeft();
})

movingRight.addEventListener('click', ()=>{
    moveRight();
})