
const container=document.getElementById("container");

function init () {
    for (let i=0;i<256;i++){
        container.insertAdjacentHTML('beforeend',`<div id="${i}" class="gridsquare"></div>`);
    }
}

init();