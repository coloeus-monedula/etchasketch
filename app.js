
const container=document.getElementById("container");

function init () {
    for (let i=0;i<16;i++){
        container.insertAdjacentHTML('beforeend',`<div id="${i}" class="gridsquare"></div>`);
    }
}

init();