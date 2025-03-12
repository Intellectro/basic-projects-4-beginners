const date = document.getElementById('date');
let currentYear = new Date().getFullYear();

date.innerHTML = currentYear;

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () =>{
    const containerHeight = linksContainer.getBoundingClientRect().height;
    console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    console.log(linksHeight);
    if (containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
});

const navBar = document.getElementById('nav')
const topLink = document.querySelector('.top-link');


window.addEventListener('scroll', ()=>{
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if (scrollHeight > (navHeight)){
        navBar.classList.add('fixed-nav');
    }else{
        navBar.classList.remove('fixed-nav');
    }

    const linkHeight = topLink.getBoundingClientRect().height;
    if (scrollHeight > (linkHeight + 470)){
        topLink.classList.add('show-link');
    }else{
        topLink.classList.remove('show-link');
    }
});

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(scrollLink=>{
    scrollLink.addEventListener('click', (e)=>{
        const navHeight = navBar.getBoundingClientRect().height;
        // const containerHeight = navBar.getBoundingClientRect().height;
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - navHeight;
        window.scrollTo({
            left: 0,
            top: position
        });
        linksContainer.style.height = 0;
    })
})