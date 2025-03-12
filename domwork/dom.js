// const slider = document.querySelector('.slider'),
//       sliderimg = slider.querySelector('.slider-img'),
//       circularbox = slider.querySelector('.cir-img'),
//       load = slider.querySelector('.load');


// let count = 0;

// let images = [];
// images[0] = "../DESKTOP-IMG/img/fd.jpg";      
// images[1] = "../DESKTOP-IMG/img/download (10).jfif";      
// images[2] = "../DESKTOP-IMG/img/OIP (29).jfif";      
// images[3] = "../DESKTOP-IMG/img/OIP (30).jfif";      
// images[4] = "../DESKTOP-IMG/img/ui2.jpg";


// if (!load.classList.contains('moveout')) {
//     load.classList.add('moveout');
// }

// load.addEventListener('animationiteration', sliderout);

// function sliderout() {
//     if (count < images.length - 1) {
//         count++;
//     }else {
//         count = 0;
//     }
//     sliderimg.src = images[count];
//     circularbox.src = images[count];    
// }

const slider = document.querySelector('.slider'),
      sliderimg = slider.querySelector('.slider-img'),
      circularbox = slider.querySelector('.cir-img'),
      load = slider.querySelector('.load');


let count = 0;

const prom = fetch('./dom.json');
prom.then(data => {
    data.json().then(image => {
        let {images} = image;
        window.img = images;
    })
})


if (!load.classList.contains('moveout')) {
    load.classList.add('moveout');
}

load.addEventListener('animationiteration', ()=>{
    sliderout(window.img)
});

function sliderout(element) {
    count++;
    if (count > element.length - 1) {
        count = 0;
    }
    sliderimg.src = element[count];
    circularbox.src = element[count];    
}