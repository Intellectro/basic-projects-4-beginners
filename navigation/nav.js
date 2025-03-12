let sidemenu = document.querySelector(".side-menu");
let burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    if (!burger.classList.contains("rearrange")) {
        burger.classList.add("rearrange");
        sidemenu.classList.add("show");
    } else {
        burger.classList.remove("rearrange");
        sidemenu.classList.remove("show");
    }
});
