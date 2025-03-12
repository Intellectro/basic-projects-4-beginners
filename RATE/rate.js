const expRate = document.querySelector(".rate.exp");
const workRate = document.querySelector(".rate.work");
const delRate = document.querySelector(".rate.del");

let expValue = parseInt(expRate.dataset.value);
let workValue = parseInt(expRate.dataset.value);
let delValue = parseInt(expRate.dataset.value);

const exp = 300;
const work = 650;
const del = 1200;

function rating() {
    let interval;
    if (expValue < exp) {
        expValue++;
    } else {
        clearTimeout(interval);
    }
    if (workValue < work) {
        workValue++;
    } else {
        clearTimeout(interval);
    }
    if (delValue < del) {
        delValue++;
    } else {
        clearTimeout(interval);
    }
    expRate.innerHTML = `${expValue}+`;
    workRate.innerHTML = `${workValue}+`;
    delRate.innerHTML = `${delValue}+`;
    setTimeout(() => {
        rating();
    }, 3);
}
rating();
