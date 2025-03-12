const btns = document.querySelectorAll('.btn');
for (let i of btns){
    let btn = i;
    btn.addEventListener('click', ()=>{
        let parent = btn.parentElement.parentElement;
        let child = parent.querySelector('.answers-tag');
        if(child.classList.contains('block')){
            btn.classList.remove('active');
            child.classList.remove('block');
        }else{
            btn.classList.add('active');
            child.classList.add('block');
        };
    });
};