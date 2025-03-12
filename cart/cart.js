const scrollDown = document.querySelector(".see-more-btn");
const productList = document.querySelector(".products-list");
const productContainer = document.querySelector(".products");

let count = 0;
let total = 0;
let units = 0;

const productHeight = productList.offsetHeight;
console.log(productHeight);

scrollDown.addEventListener("click", () => {
    // window.scrollTo({
    //     left: 0,
    //     top: parseInt(productHeight),
    //     behavior: "smooth",
    // });

    productList.scrollIntoView({
        behavior: "smooth",
    });
});

const newElement = products
    .map((product) => {
        return `<div class="item" id="${product.id}">
    <div class="item-container">
        <div class="item-img">
            <img src="${product.imgSrc}" alt="${product.name}">
        </div>
        <div class="desc">
            <h2>${product.name}</h2>
            <h2><small>$</small>${product.price}</h2>
            <p>
                ${product.description}
            </p>
        </div>
        <div class="add-to-wishlist">
            <img src="./icons/heart.png" alt="add to wish list">
        </div>
        <div class="add-to-cart">
            <img src="./icons/bag-plus.png" alt="add to cart">
        </div>
    </div>
</div>`;
    })
    .join("");

productContainer.innerHTML = newElement;

const addItemBtn = document.querySelectorAll(".add-to-cart");

addItemBtn.forEach((addBtn) => {
    addBtn.addEventListener("click", addItemToCart);
});

function addItemToCart(e) {
    const dataCollector = e.currentTarget.parentElement;
    const imageSrc = dataCollector.querySelector(".item-img img").src;
    const itemname =
        dataCollector.querySelector(".desc").firstElementChild.innerHTML;
    const itemprice =
        dataCollector.querySelector(".desc").children[1].innerText;
    const itemdata = {
        number: units,
        image: imageSrc,
        name: itemname,
        price: itemprice,
    };
    total += totalPrice(itemdata);
    showCartData(itemdata, total);
    grabUnitItem(itemdata);
}

function showCartData({ number, image, name, price }, total) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `<div class="item-info">
    <img src="${image}" alt="${name}" />
    <h4>T-shirt 1</h4>
</div>
<div class="unit-price"><small>$</small>${price.slice(1)}</div>
<div class="units">
    <div class="btn minus">-</div>
    <div class="number">${number}</div>
    <div class="btn plus">+</div>
</div>`;

    const plusItem = cartItem.querySelector(".btn.plus");
    plusItem.addEventListener("click", incrementItem);
    document.querySelector(".cart-items").appendChild(cartItem);
    numberOfItems(total);
    cartNumber();
}

function numberOfItems(total) {
    const totalCalc = document.querySelector(".subtotal");
    totalCalc.innerHTML = `Subtotal (${
        document.querySelector(".cart-items").children.length
    } items): $${total}`;
}

function totalPrice({ price }) {
    return parseFloat(price.slice(1));
}

function cartNumber() {
    document.querySelector(".total-items-in-cart").innerHTML =
        document.querySelector(".cart-items").children.length;
}

function incrementItem(e) {
    const dataCollector = e.currentTarget.parentElement;
    const price = parseFloat(
        dataCollector.previousElementSibling.textContent.slice(1)
    );
    units++;
    e.currentTarget.previousElementSibling.innerText = units;
    total += units * price;
    numberOfItems(total);
}
