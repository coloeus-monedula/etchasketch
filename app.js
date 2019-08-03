
const container=document.getElementById("container");
let penOff=false;
const penStatus=document.getElementById("penstatus");

function init () {
    for (let i=0;i<256;i++){
        container.insertAdjacentHTML('beforeend',`<div id="${i}" class="gridsquare"></div>`);
    }
}

container.addEventListener("mouseover",function(event){
     // highlight the mouseover target if user not clicked and 'turned' pen off
     if (penOff==false){
        event.target.style.backgroundColor="orange";
     }
})


//toggles whether colour is applied or not
document.addEventListener("click",function(e){
    if (penOff==false){
        penOff=true;
        penStatus.innerHTML="Off";
    } else{
        penOff=false;
        penStatus.innerHTML="On";
    }
})

init();