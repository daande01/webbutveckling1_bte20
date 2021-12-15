console.log("test");
var canvas =document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var h=window.innerHeight;
var w=window.innerWidth;
canvas.width=w;
canvas.height=h;
var x=100;
var y= 100;
var xSpeed=1;
var ySpeed=2;
var g = 2;

function update(){
  
  ySpeed= ySpeed+g;
  
  x=x+xSpeed;
  y=y+ySpeed;
  if (y>=h){
    ySpeed=ySpeed*-1;
  }
  
  
}
function paint(){
  
  ctx.clearRect(0,0,w,h);
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, 2 * Math.PI);
  ctx.lineWidth=10;
  ctx.strokeStyle="rgb(23,23,23, 0.8)";
  ctx.stroke();
  ctx.fillStyle="rgb(255,23,23, 0.8)";
  ctx.fill();
  update();
}

setInterval(paint,40);