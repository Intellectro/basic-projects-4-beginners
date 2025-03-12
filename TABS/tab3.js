const container = document.querySelector('.flex-container');
const buttons = document.querySelectorAll('.btn');
const articles = document.querySelectorAll('.con')

container.addEventListener('click', (e)=>{
    const dataId = e.target.dataset.id;
    buttons.forEach(button =>{
        button.classList.remove('bg-active')
        e.target.classList.add('bg-active')
    })
    if (dataId){
        articles.forEach(article =>{
            delete article.dataset.active;
        })
        const getId = document.getElementById(dataId);
        getId.dataset.active = true;
    }
})