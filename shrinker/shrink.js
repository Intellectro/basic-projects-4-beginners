const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    setBackToDefault(box);
    box.addEventListener("click", expandCard);
});

function expandCard(e) {
    let selectedBoxValue = e.target.dataset.value;
    selectedBoxValue = 60;
    boxes.forEach((box) => {
        if (box.dataset.value == 60) box.dataset.value = 10;
        setBackToDefault(box);
    });
    e.target.style.setProperty("--wid", parseInt(selectedBoxValue) + "%");
    setTimeout(() => {
        e.target.children[0].style.opacity = 1;
    }, 800);
}

function setBackToDefault(data) {
    let datavalue = data.dataset.value;
    data.style.setProperty("--wid", parseInt(datavalue) + "%");
    if (parseInt(datavalue) < 50) data.children[0].style.opacity = 0;
}
