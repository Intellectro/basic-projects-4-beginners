let index = 0;
let images = [];
let time = 2000;
images[0] = "../DESKTOP-IMG/img/fd.jpg";
images[1] = "../DESKTOP-IMG/img/OIP (29).jfif";
images[2] = "../DESKTOP-IMG/img/OIP (30).jfif";
images[3] = "../DESKTOP-IMG/img/ui.jpg";
images[4] = "../DESKTOP-IMG/img/ui2.jpg";
images[5] = "../DESKTOP-IMG/img/download (10).jfif";

function genImage(inherit){
    document.slide.src = inherit[index];

    if (index < (inherit.length - 1)){
        index++
    }else{
        index = 0
    }
    setTimeout("genImage(images)", time);
}
genImage(images);