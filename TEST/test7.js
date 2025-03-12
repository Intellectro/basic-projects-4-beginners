const sideMenu = document.querySelector('.side-menu');
const burger = document.querySelector('.burger');
const links = document.querySelector('.side-links');
const headContainer = document.querySelector('.head-container');
const navLinks = document.querySelector('.nav-links');

function getColor(){
    let child = navLinks.querySelectorAll('.lists');
    child.forEach(child=>{
        let hyperLinks = child.querySelector('.links');
        hyperLinks.style.color = 'black';
    });
}
getColor();


function white(){
    let child = links.querySelectorAll('.lists');
    child.forEach(list=>{
        let link = list.querySelector('.links');
        link.style.color = 'white';
    })
}

function black(){
    let child = links.querySelectorAll('.lists');
    child.forEach(list=>{
        let link = list.querySelector('.links');
        link.style.color = 'black';
    })
}

window.addEventListener('scroll', ()=>{
    let pageUp = window.pageYOffset;
    let headerHeight = headContainer.offsetHeight;
    console.log(headerHeight);
    if (pageUp > headerHeight){
        headContainer.classList.add('fixed-nav');
        black();
        getColor();
    }else{
        headContainer.classList.remove('fixed-nav');
        white();
    }
})

burger.addEventListener('click', ()=>{
    const menuHeight = sideMenu.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (menuHeight === 0){
        sideMenu.style.height = `${linksHeight}px`;
    }else{
        sideMenu.style.height = 0;
    }
});

const navlinks = document.querySelectorAll('.links');
navlinks.forEach(navlink=>{
    navlink.addEventListener('click', (e)=>{
        e.preventDefault();
        const idTag = e.currentTarget.getAttribute('href');
        const id = idTag.slice(1);
        const element = document.getElementById(id);
        const getElementPosition = element.offsetTop;
        window.scrollTo({
            left: 0,
            top: getElementPosition
        });
    })
})