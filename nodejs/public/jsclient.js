
'use strict'
function reqListener (data) {
document.body.innerHTML += this.responseText + '<br>';
}
var oReq = new XMLHttpRequest();


oReq.addEventListener("load", reqListener);


document.getElementById("button").addEventListener("click", function(){
  
  

  oReq.open("POST", "/api");
  
  var data={"sökord":document.getElementById("s").value};
  console.log(JSON.stringify(data));
  console.log(document.getElementById("s").value);
  
  oReq.send(JSON.stringify(data));
  
  
  
});