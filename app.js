
const container=document.getElementById("container");
let penOff=false;
const penStatus=document.getElementById("penstatus");
const reset=document.getElementById("reset");
const rainbowColour=document.getElementById("rainbow");
const changeColour=document.getElementById("changecolour");
let squaresps=16;
let setColour="orange";
let isRainbow=false;



function init () {
    //sets size of squares
    let size= 720/squaresps;
    for (let i=0;i<squaresps*squaresps;i++){
        container.insertAdjacentHTML('beforeend',`<div id="${i}" class="gridsquare" style="width:${size}px;height:${size}px;"></div>`);
    }
}

function getRandomColour() {
    const letters = '0123456789ABCDEF';
    let colour = '#';
    for (var i = 0; i < 6; i++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
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
    //does nothing if pen is off
    if(penOff==true){
        return;
    }
    //if rainbow option off
    if (isRainbow==false){
        event.target.style.backgroundColor=`${setColour}`;
    } else{
        event.target.style.backgroundColor=`${getRandomColour()}`;
    }
})


//toggles whether colour is applied or not
document.addEventListener("click",function(e){
    //does not run if button is clicked
    if (e.target.type=="button") {
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

//changes setColour
changeColour.addEventListener("click",function(){
    setColour=getRandomColour();
    isRainbow=false;
})

//makes it so that every square has a random colour by setting isRainbow to true
rainbowColour.addEventListener("click",function(){
    isRainbow=true;
})

init();