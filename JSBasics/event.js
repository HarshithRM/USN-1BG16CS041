// Event Listener 
var but =document.getElementById('btn');
but.addEventListener('mouseover',changeOnMouseOver);
but.addEventListener('mouseout',changeOnMouseOut);

function changeOnMouseOver(){
    //var but = document.getElementById('btn');
    this.style.background="red";
}
function changeOnMouseOut(){
    //var but = document.getElementById('btn');
    this.style.background="white";
}