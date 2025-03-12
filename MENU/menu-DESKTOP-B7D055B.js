const menu = [
    {
        id: 1,
        title: "Butter Pancakes",
        category: "breakfast",
        price: 15.99,
        img: "../DESKTOP-IMG/slide1.avif",
        desc: "I'm a baby bitters sit amet consectetur adipisicing elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?",
    },
    {
        id: 2,
        title: "Diner double",
        category: "Lunch",
        price: 13.99,
        img: "../DESKTOP-IMG/slide2.avif",
        desc: "Vaporware iphone mublecore selvage etur adipisicing elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?",
    },
    {
        id: 3,
        title: "Godzilla MilkShare",
        category: "Shakes",
        price: 4.99,
        img: "../DESKTOP-IMG/slide3.avif",
        desc: "godzilla maiksare is the most popular lunskas elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?",
    },
    {
        id: 4,
        title: "Country Delight",
        category: "breakfast",
        price: 20.99,
        img: "../DESKTOP-IMG/slide4.avif",
        desc: "I'm a baby bitters sit amet consectetur adipisicing elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?",
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "Lunch",
        price: 22.99,
        img: "../DESKTOP-IMG/slide6.avif",
        desc: "frozen vegan chiller by edmund etur adipisicing elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?",
    },
    {
        id: 6,
        title: "Greo Dream",
        category: "Shakes",
        price: 18.99,
        img: "../DESKTOP-IMG/slide7.avif",
        desc: "Portland chicharrones ethical edison. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?",
    },
    {
        id: 7,
        title: "Bacon Overflow",
        category: "breakfast",
        price: 15.99,
        img: "../DESKTOP-IMG/slide8.avif",
        desc: "Bacon cupcake si ysfd jjdsdhk jjs dipisicing elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?",
    },
    {
        id: 8,
        title: "American Classic",
        category: "Lunch",
        price: 12.99,
        img: "../DESKTOP-IMG/loyd.jpg",
        desc: "Best of america the juice of wisdom dipisicing elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?",
    },
    {
        id: 9,
        title: "Butter Pancakes",
        category: "Shakes",
        price: 15.99,
        img: "../DESKTOP-IMG/slide1.avif",
        desc: "I'm a baby bitters sit amet consectetur adipisicing elit. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?",
    },
    {
        id: 10,
        title: "Divine Night",
        category: "Dinner",
        price: "12.33",
        img: "../DESKTOP-IMG/slide7.avif",
        desc: "Portland diner night chicharrones ethical edison. Culpa doloremque quis impedit esse! Nisi aspernatur quia sunt doloremque illum, iusto dolor molestiae assumenda?",
    },
];

const btnContainer = document.querySelector(".btn-container");
const container = btnContainer.nextElementSibling;

function extractItems(items) {
    const newItem = items
        .map((item) => {
            console.log(index);
            return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="#">
         <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">&dollar;${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`;
        })
        .join("");
    container.innerHTML = newItem;
}

window.addEventListener("DOMContentLoaded", () => {
    extractItems(menu);
    const btns = menu.reduce(
        (value, item) => {
            if (!value.includes(item.category)) {
                value.push(item.category);
            }
            return value;
        },
        ["all"]
    );
    const btn = btns.map((btn) => {
        return `<button class="filter-btn" data-id="${btn}" type="button">${btn}</button>`;
    });
    btnContainer.innerHTML = btn.join("");

    const buttons = [...btnContainer.children];
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const dataId = e.currentTarget.dataset.id;
            const menuItems = menu.filter((item) => {
                if (item.category === dataId) {
                    return item;
                }
            });
            if (dataId === "all") {
                extractItems(menu);
            } else {
                extractItems(menuItems);
            }
        });
    });
});
