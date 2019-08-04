
const container=document.getElementById("container");
let penOff=false;
const penStatus=document.getElementById("penstatus");
const reset=document.getElementById("reset");
let squaresps=16;


//TODO: FIX THE SIZING PROBLEM WHEN RESETTING
function init () {
    //sets size of squares
    let size= 720/squaresps;
    for (let i=0;i<squaresps*squaresps;i++){
        container.insertAdjacentHTML('beforeend',`<div id="${i}" class="gridsquare" style="width:${size}px;height:${size}px;"></div>`);
    }
}

//clears the grid, sets squares to amount
function clearGrid(answer){
    squaresps=answer;
    container.innerHTML="";
    //changes container column amount to answer
    container.style.gridTemplateColumns=`repeat(${answer},auto)`;
    init();
}

container.addEventListener("mouseover",function(event){
     // highlight the mouseover target if user not clicked and 'turned' pen off
     if (penOff==false){
        event.target.style.backgroundColor="orange";
     }
})


//toggles whether colour is applied or not
document.addEventListener("click",function(e){
    if (e.target.id=="reset") {
        return;
    }
    if (penOff==false){
        penOff=true;
        penStatus.innerHTML="Off";
    } else{
        penOff=false;
        penStatus.innerHTML="On";
    }
})

//resets grid, asks for squares per side expected
reset.addEventListener("click",function(e){
    let answer=prompt("How many squares per side? Max 100")
    //checks if is number submitted and is between 1-100
    if ((answer != null) && (isNaN(answer)==false) && (answer<=100) && (answer>0)) {
        clearGrid(answer);
    }
})

init();