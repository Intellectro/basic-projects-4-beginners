let contents = [
    "movie",
    "supernatural",
    "merlin",
    "sexlife",
    "thug-life",
    "coal-city",
];

const form = document.querySelector("form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const inputval = form["search"].value;

    const items = contents
        .map((content) => {
            if (
                content.startsWith(inputval) ||
                content.endsWith(inputval) ||
                content.includes(inputval) ||
                inputval === content
            ) {
                return `<span class="content">${content}</span>`;
            }
        })
        .join("");
    const display = form.nextElementSibling.querySelector(".content-display");
    display.innerHTML = items;
    display.classList.add("show");
}
