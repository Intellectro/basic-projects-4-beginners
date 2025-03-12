const video = document.querySelector(".video-container");

video.addEventListener("pointerdown", (e) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    showPointerAction(e, dot);
});

function showPointerAction(e, dot) {
    const width = e.width;
    const height = e.height;
    const posX = e.pageX;
    const posY = e.pageY;

    dot.style.height = height + "px";
    dot.style.width = width + "px";
    dot.style.left = posX + "%";
    dot.style.top = posY + "%";

    document.querySelector(".vid").appendChild(dot);
}
