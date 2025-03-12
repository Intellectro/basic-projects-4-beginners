const delBtn = document.querySelector('.btn-del');
const model = document.querySelector('.show-model');

delBtn.addEventListener("click", showModel);

function showModel() {
    if (!model.classList.contains('visiblize-box')) {
        model.classList.add('visiblize-box');
    } else {
        model.classList.remove('visiblize-box');
    }
}