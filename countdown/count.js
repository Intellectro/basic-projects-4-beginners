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
const displayDate = document.querySelector('.short-text');

const date = new Date(2022,7,21,9,23);
const year = date.getFullYear();
const monthDate = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();

let month = date.getMonth();
month = months[month]

let day = date.getDay();
day = weekdays[day]

displayDate.innerHTML = `giveaway starts on ${day}, ${month} ${monthDate} ${year} ${hour}:${minutes}am`;

const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');

let interval;

let secsCount = secs.innerText;
let minsCount = mins.innerText;
let hoursCount = hours.innerText;
let daysCount = days.innerText;

interval = setInterval(() => {
    secsCount -= 1;
    if (secsCount === 0){
        minsCount -= 1;
        secsCount = 60;
        if (minsCount === 0){
            hoursCount -= 1;
            minsCount = 60;
            if (hoursCount === 0){
                daysCount -= 1;
                hoursCount = 24;
                if (daysCount === 0){
                    secsCount = 0;
                    minsCount = 0;
                    hoursCount = 0;
                    daysCount = 0;
                    clearInterval(interval);
                }
                days.innerHTML = daysCount;
            }
            hours.innerHTML = hoursCount;
        }
        mins.innerHTML = minsCount;
    }
    secs.innerHTML = secsCount;
},1000)