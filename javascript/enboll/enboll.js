console.log("test");
var canvas =document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var h=window.innerHeight;
var w=window.innerWidth;
canvas.width=w;
canvas.height=h;

function paint(){
  
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle="rgb(23,23,23, 0.8)";
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  
  ctx.fill();
}

paint();