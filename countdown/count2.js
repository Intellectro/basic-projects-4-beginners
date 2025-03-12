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

const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const displayDate = document.querySelector('.short-text');

const date = new Date(2022,8,27,18,33);
const year = date.getFullYear();
const monthDay = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();

let month = date.getMonth();
month = months[month];

let day = date.getDay();
day = weekDays[day];


displayDate.innerHTML = `giveaway ends on ${day}, ${month} ${monthDay} ${hour}:${minute}am`;

const futureTime = date.getTime();

function getCurrentTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    const oneDay = (24*60*60*1000);
    const oneHour = (3600*1000);
    const oneMinute = (60*1000);

    let days = (t / oneDay);
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
    const values = [days, hours, minutes, seconds];
    const boxes = document.querySelectorAll('.num');
    boxes.forEach((box,index) => {
        if (values[index] <= 9){
            box.innerHTML = `0${values[index]}`;
        }else{
            box.innerHTML = values[index];
        }
        if (t < 0){
            clearInterval(countdown);
            box.innerHTML = `00`;
        }
    })
}
let countdown = setInterval(getCurrentTime, 1000);

getCurrentTime();