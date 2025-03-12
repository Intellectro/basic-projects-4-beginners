const videoContainer = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');

btn.addEventListener('click', ()=>{
    if (!btn.classList.contains('slide')){
        btn.classList.add('slide');
        videoContainer.pause();
    }else{
        btn.classList.remove('slide');
        videoContainer.play();
    }
})