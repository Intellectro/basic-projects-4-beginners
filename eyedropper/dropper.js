document.querySelector(".dropper").addEventListener("click", colorDetector);

function colorDetector() {
    const output = document.createElement("p");
    output.classList.add("output");

    if (!"EyeDropper" in window) {
        console.log("Browser doesn't support Eyedropper");
        return;
    }

    const abortController = new AbortController();

    const drop = new EyeDropper();
    drop.open({ signal: abortController.signal })
        .then((obj) => {
            output.innerHTML = obj.sRGBHex;
            output.style.setProperty("--clp", obj.sRGBHex);
        })
        .catch((err) => {
            output.innerHTML = err.message;
        });
    document.querySelector(".container").appendChild(output);
}
