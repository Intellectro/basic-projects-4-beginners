const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const displayText = document.querySelector('.short-text');

const future = new Date(2022,8,12,9,23);
const futureYear = future.getFullYear();
const futureDate = future.getDate();
const hours = future.getHours();
const minutes = future.getMinutes();
const seconds = future.getSeconds();

let futureMonth = future.getMonth();
let day = future.getDay();

futureMonth = months[futureMonth];
day = weekdays[day];



function outputDate(){
    displayText.innerHTML = `Giveaway ends on ${futureMonth} ${futureDate}, on ${day}, ${futureYear} so don't miss out`;
    const curentDate = new Date();
    const t = (future - curentDate);
    const currentday = (24*60*60*1000);
    const currenthour = (60*60*1000);
    const currentminute = (60*1000);
    const currentsecond = (1000);

    const days = Math.floor(t / currentday);
    const hours = Math.floor((t % currentday) / currenthour);
    const minutes = Math.floor((t % currenthour) / currentminute);
    const seconds = Math.floor((t % currentminute) / currentsecond);
    let message;
    document.querySelectorAll('.num').forEach(display =>{
        if (display.classList.contains('days')){
             message = days;           
        }else if(display.classList.contains('hours')){
            message = hours;
        }else if (display.classList.contains('minutes')){
            message = minutes;
        }else{
            message = seconds;
        }
        if (message > 0 && message < 9){
            display.innerHTML = `0${message}`;
        }else{
            display.innerHTML = message;
        }
    })
    setTimeout(outputDate,0);
}

window.addEventListener('DOMContentLoaded', outputDate);