const contentContainer = document.querySelector('.content-container');
const buttons = Array.from(contentContainer.querySelector('.set-btns').children);
const articles = [...contentContainer.querySelector('.articles-box').children];
contentContainer.addEventListener("click", (e)=>{
    showIds(e)
})

function showIds(event) {
    const getIds = event.target.dataset.id;
    buttons.forEach(btn => {
        btn.classList.remove('move-in');
    })
    event.target.classList.add('move-in');
    if (getIds){
        articles.forEach(article => {
            article.classList.remove('active');
        })
        const ids = document.getElementById(getIds);
        ids.classList.add('active');
    }
}