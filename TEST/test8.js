const headerContainer = document.querySelector('.header-container');
const menuIcon = document.querySelector('.menu-icon');
const sideMenu = document.querySelector('.side-menu');
const sideLists = document.querySelector('.side-lists');

menuIcon.addEventListener('click', ()=>{
    const listsHeight = sideLists.getBoundingClientRect().height;
    if (menuIcon.classList.contains('transform')){
        menuIcon.classList.remove('transform');
        sideMenu.style.height = 0;
    }else{
        menuIcon.classList.add('transform');
        sideMenu.style.height = `${listsHeight}px`;
    }
});
window.addEventListener('scroll', ()=>{
    const position = window.scrollY;
    const headerPosition = headerContainer.offsetHeight;
    if (position > headerPosition){
        headerContainer.classList.add('fixed-nav');
    }else{
        headerContainer.classList.remove('fixed-nav');
    }
})