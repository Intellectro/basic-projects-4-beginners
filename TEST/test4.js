const menu = [
    {
        id: 1,
        title: 'Butter Pancakes',
        category: "breakfast",
        price: 15.99,
        img: "../DESKTOP-IMG/slide1.avif",
        desc: "I'm a baby bitters sit amet consectetur adipisicing elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?"
    },
    {
        id: 2,
        title: 'Diner double',
        category: "Lunch",
        price: 13.99,
        img: "../DESKTOP-IMG/slide2.avif",
        desc: "Vaporware iphone mublecore selvage etur adipisicing elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?"
    },
    {
        id: 3,
        title: 'Godzilla MilkShare',
        category: "Shakes",
        price: 4.99,
        img: "../DESKTOP-IMG/slide3.avif",
        desc: "godzilla maiksare is the most popular lunskas elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?"
    },
    {
        id: 4,
        title: 'Country Delight',
        category: "breakfast",
        price: 20.99,
        img: "../DESKTOP-IMG/slide4.avif",
        desc: "I'm a baby bitters sit amet consectetur adipisicing elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?"
    },
    {
        id: 5,
        title: 'Egg Attack',
        category: "Lunch",
        price: 22.99,
        img: "../DESKTOP-IMG/slide6.avif",
        desc: "frozen vegan chiller by edmund etur adipisicing elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?"
    },
    {
        id: 6,
        title: 'Greo Dream',
        category: "Shakes",
        price: 18.99,
        img: "../DESKTOP-IMG/slide7.avif",
        desc: "Portland chicharrones ethical edison. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?"
    },
    {
        id: 7,
        title: 'Bacon Overflow',
        category: "breakfast",
        price: 15.99,
        img: "../DESKTOP-IMG/slide8.avif",
        desc: "Bacon cupcake si ysfd jjdsdhk jjs dipisicing elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?"
    },
    {
        id: 8,
        title: 'American Classic',
        category: "Lunch",
        price: 12.99,
        img: "../DESKTOP-IMG/loyd.jpg",
        desc: "Best of america the juice of wisdom dipisicing elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?"
    },
    {
        id: 9,
        title: 'Butter Pancakes',
        category: "Shakes",
        price: 15.99,
        img: "../DESKTOP-IMG/slide1.avif",
        desc: "I'm a baby bitters sit amet consectetur adipisicing elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?"
    },
    {
        id: 10,
        title: "Divine Night",
        category: "Dinner",
        price: "12.33",
        img: "../DESKTOP-IMG/slide7.avif",
        desc: "Portland diner night chicharrones ethical edison. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?"
    }
];

const displayContent = document.querySelector('.display-item');
const btnContainer = document.querySelector('.btn-container');

function showMenu(menuItems){
    let displayMenu = menuItems.map(items=>{
        return `<div class="item-container">
        <img src="${items.img}" alt="#">
        <div class="item-content">
            <div class="flex-item">
                <div class="title">${items.title}</div>
                <div class="price">&dollar;${items.price}</div>
            </div><!-- end flex item -->
            <div class="text-desc">${items.desc}</div>
        </div><!-- end item content -->
    </div><!-- end item container -->`;
    }).join("");
    displayContent.innerHTML = displayMenu;
}

window.addEventListener('DOMContentLoaded', ()=>{
    showMenu(menu);
    let extractButton = menu.reduce((values, item)=>{
        if (!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    }, ['all'])
    let categoryBtns = extractButton.map(menuButton=>{
        return `<button class="btn" data-id="${menuButton}">${menuButton}</button>`;
    }).join("");
    btnContainer.innerHTML = categoryBtns;
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach(button=>{
        button.addEventListener('click', (e)=>{
            let getId = e.currentTarget.dataset.id;
            let qualifiedContent = menu.filter(content=>{
                if (getId === content.category){
                    return content;
                }
            });
            if (getId === 'all'){
                showMenu(menu);
            }else{
                showMenu(qualifiedContent)
            }
        })
    })
})