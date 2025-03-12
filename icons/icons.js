const icons = document.querySelectorAll(".icon");
icons.forEach((icon, index, arr) => {
    icon.addEventListener("click", function (e) {
        if (e.currentTarget.dataset.bgColor === "black") {
            e.currentTarget.parentNode.style.border = "1px solid white";
            e.currentTarget.style.borderColor = "white";
        } else {
            arr[1].style.borderColor = "black";
            e.currentTarget.parentNode.style.borderColor = "black";
        }
        document.querySelector(".container").style.backgroundColor =
            e.currentTarget.dataset.bgColor;
        document.querySelectorAll(".dot").forEach((dot) => {
            dot.classList.remove("auto-white");
        });
        this.children[0].classList.add("auto-white");
    });
});
