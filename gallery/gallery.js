const boxes = [...document.querySelector('.grid-container').children];
const btncontainer = document.querySelector('.btn-container');


let count = 0;

boxes.forEach(box => {
    box.addEventListener('click', function(){
        singlized(this)
    })
});

function singlized(element){
    if (!element.classList.contains('display')) {
        element.classList.add('display');
        btncontainer.classList.add('show');
    }else{
        element.classList.remove('display');
        btncontainer.classList.remove('show')
    }
}

btncontainer.lastElementChild.addEventListener('click', function(){
    count++;
    if (count > boxes.length - 1) {
        count = 0;
    };
    boxes.forEach(box => {
        box.classList.remove('display');
    });
    boxes[count].classList.add('display');
})

btncontainer.firstElementChild.addEventListener('click', function() {
    count--;
    if (count < 0) {
        count = boxes.length - 1;
    }
    boxes.forEach(box => {
        box.classList.remove('display');
    })
    boxes[count].classList.add('display');
})