const canvas = document.querySelector('.crop-vid');
const video = document.querySelector('.video');
const snapbtn = document.querySelector('.snap');

const context = canvas.getContext('2d');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
        video.srcObject = stream;
        video.play();
    });
};

snapbtn.addEventListener('click', cropvideo);


function cropvideo(){
    context.drawImage(video, 0, 0, 500, 450);
}