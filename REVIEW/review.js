const reviews = [
    {
        id: 1,
        name: "Micheal Smith",
        job: "web developer",
        img: "../DESKTOP-IMG/OIP (24).jfif",
        text: "i'm baby sitter, with more than a year experience, random sentence, bicycle rights tumeric chartruese before they are sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Gabriel Johnson",
        job: "web designer",
        img: "../DESKTOP-IMG/OIP (11).jfif",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue random sentence, bicycle rights tumeric chartruese before they are sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "intern",
        img: "../DESKTOP-IMG/OIP (10).jfif",
        text: "i'm baby sitter, with more than a year experience, random sentence, bicycle rights tumeric chartruese before they are sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "the boss",
        img: "../DESKTOP-IMG/OIP (25).jfif",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue random sentence, bicycle rights tumeric chartruese before they are sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    }
];

const authorsName = document.querySelector('#author');
const profession = document.querySelector('#job');
const description = document.querySelector('#info');
const image = document.querySelector('#person-img');


const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let counter = 0;

nextBtn.addEventListener('click', ()=>{
    counter++;
    if (counter > reviews.length - 1){
        counter = 0;
    }
    display(counter);
})

prevBtn.addEventListener('click', ()=>{
    counter--;
    if (counter < 0){
        counter = reviews.length - 1;
    }
    display(counter);
})


function display(count){
    let item = reviews[count];
    authorsName.innerHTML = item.name;
    profession.innerHTML = item.job;
    description.innerHTML = item.text;
    image.src = item.img;
}

const container = nextBtn.parentElement;
const randomBtn = container.nextElementSibling;
randomBtn.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * reviews.length);
    display(random);
})