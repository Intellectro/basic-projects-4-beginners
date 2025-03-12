const displayCount = document.getElementById('text');
const container = displayCount.parentElement.closest('.box-container');
const btnContainers = container.querySelector('.btn-div');
let count = 0;

const btns = [...btnContainers.children];
btns.forEach(item => {
    const getTata = [...item.childNodes];
    getTata.forEach(btn => {
        btn.addEventListener('click', ()=>{
            if (btn.classList.contains('I')){
                count += 1;
                if (count > 0){
                    displayCount.style.color = "green";
                }else{
                    displayCount.style.color = "red";
                }
            }else if (btn.classList.contains('D')){
                count -= 1;
                if (count > 0){
                    displayCount.style.color = "green";
                }else{
                    displayCount.style.color = "red";
                }
            }else{
                count = 0;
            }
            displayCount.innerHTML = count;
        })
    })
})
