const video = document.querySelector('.video-container');
const switchBtn = document.querySelector('.switch-btn');

switchBtn.addEventListener('click', ()=>{
    if (switchBtn.classList.contains('slide')){
        switchBtn.classList.remove('slide');
        video.play();
    }else{
        switchBtn.classList.add('slide');
        video.pause();
    }
})