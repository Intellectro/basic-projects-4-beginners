let displayBtn = document.querySelector('.m-width');
let cancelBtn = document.querySelector('.del-icon');
let boxShowned = document.querySelector('.second-content');
displayBtn.addEventListener('click', ()=>{
    boxShowned.classList.add('show');
})
cancelBtn.addEventListener('click', ()=>{
    boxShowned.classList.remove('show');
})