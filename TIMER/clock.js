const hourHand = document.querySelector('[data-hour-time]');
const minuteHand = document.querySelector('[data-minute-time]');
const secondHand = document.querySelector('[data-second-time]');

setInterval(() => {
    setClock();
},1000)

function setClock(){
    const currentDate = new Date();
    let secondRatio = (currentDate.getSeconds() / 60);
    let minuteRatio = ((secondRatio + currentDate.getMinutes()) / 60);
    let hourRatio = ((minuteRatio + currentDate.getHours()) / 12);
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, angle){
    element.style.setProperty('--rotation', (angle * 360))
}

window.addEventListener('DOMContentLoaded', setClock)