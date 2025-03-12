let text = document.getElementById('text');
let colorBtn = document.getElementById('generate');
let simpleBtn = document.getElementById('simple');
let hexBtn = document.getElementById('hex');


let colorCodes = 'ABCDEF0123456789';
let simpleColor = ['red', 'blue', 'green', 'yellow', 'purple', 'gold'];
let count = 0;


function generateSimpleColor(){
    if (count < simpleColor.length){
        text.innerHTML = `<pre>BACKGROUND: \t ${simpleColor[count]}</pre>`;
        document.body.style.backgroundColor = simpleColor[count];
        count++;
        if(count === simpleColor.length){
            count = 0;
        }
    }    
}
simpleBtn.addEventListener('click', ()=>{
    simple.style.color = '#659BD0';
    hexBtn.style.color = 'white';
    colorBtn.addEventListener('click', ()=>{
        generateSimpleColor();
    })
});

function generateHexColor(){
    let matchCode = '#';
    for (let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * colorCodes.length);
        matchCode += colorCodes[random];
    }
    document.body.style.backgroundColor = matchCode;
    text.innerHTML = `<pre>HEX CODE: \t ${matchCode}</pre>`;
}
hexBtn.addEventListener('click', ()=>{
    hexBtn.style.color = '#659BD0';
    simpleBtn.style.color = 'white';
    colorBtn.addEventListener('click', ()=>{
        generateHexColor();
    })
})