const audio = new Audio();
audio.src = "../mp3/2weird-Okalumu-Mma-(TrendyBeatz.com).mp3";
audio.loop = true;
audio.controls = true;
audio.autoplay = false;

let context,
    canvas,
    fbcArray,
    ctx,
    source,
    analyser,
    bars,
    barX,
    barWeight,
    barHeight;

window.addEventListener("load", initAudioAnalyser, false);

function initAudioAnalyser() {
    document.querySelector(".audio-container").appendChild(audio);

    context = new AudioContext();

    canvas = document.querySelector(".audio-analyser");
    ctx = canvas.getContext("2d");

    analyser = context.createAnalyser();
    source = context.createMediaElementSource(audio);

    source.connect(analyser);
    analyser.connect(context.destination);

    frameLooper();
}

function frameLooper() {
    window.requestAnimationFrame(frameLooper);

    fbcArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(fbcArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000";

    bars = 100;

    for (let i = 0; i < bars; i++) {
        barX = i * 3;
        barWeight = 2;
        barHeight = -(fbcArray[i] / 2);

        ctx.fillRect(barX, canvas.height, barWeight, barHeight);
    }
}
