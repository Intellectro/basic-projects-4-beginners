let count = 0;
const displayCount = document.getElementById('text');
const buttons = document.querySelectorAll('.btn-d');

buttons.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        const grabClass = e.currentTarget.classList;
        if (grabClass.contains("fir")){
            count += 1;
            if (count <= 9){
                displayCount.innerHTML = `0${count}`;
            }else{
                displayCount.innerHTML = count;
            }
        }else if (grabClass.contains("sec")){
            count -= 1;
            if (count >= 0 && count <= 9){
                displayCount.innerHTML = `0${count}`;
            }else{
                displayCount.innerHTML = count;
            }
        }else{
            count = 0;
            displayCount.innerHTML = count;
        }
    })
})