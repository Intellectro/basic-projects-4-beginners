const experienceValue = document.querySelector('.exp'),
      workValue = document.querySelector('.work'),
      deliveryValue = document.querySelector('.del');

const exp = 500,
      work = 1300,
      del = 3000;

let expValue = parseInt(experienceValue.dataset.value),
    wrkValue = parseInt(workValue.dataset.value),
    delValue = parseInt(deliveryValue.dataset.value);

let interval;

function rateOn() {
    if (expValue < exp) {
        expValue++;
    }else{
        clearTimeout(interval);
    }
    if (wrkValue < work) {
        wrkValue++;
    }else{
        clearTimeout(interval);
    }
    if (delValue < del) {
        delValue++;
    }else{
        clearTimeout(interval);
    }
    experienceValue.innerHTML = `${expValue}+`;
    workValue.innerHTML = `${wrkValue}+`;
    deliveryValue.innerHTML = `${delValue}+`;

    interval = setTimeout(rateOn, 3)
}

rateOn();