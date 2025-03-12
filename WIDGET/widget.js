const displayWidget = document.querySelector('.output-icon');
const closeWidget = document.querySelector('.close-widget');
const widget = document.querySelector('.wsp-content-box');
const subWidget = document.querySelector('.wsp-auto-con');
const curtime = document.querySelector('.time');


displayWidget.addEventListener('click', ()=>{
    const widgetHeight = widget.offsetHeight;
    const subWidgetHeight = subWidget.offsetHeight;
    if (subWidgetHeight > widgetHeight){
        widget.style.height = subWidgetHeight + "px";
    }else{
        widget.style.height = "0px";
    }
})
closeWidget.addEventListener('click', ()=>{
    widget.style.height = '0px';
})

const hr = new Date().getHours();
const min = new Date().getMinutes();


curtime.innerHTML = `${hr} : ${min}`;