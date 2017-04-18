window.onload=function(){
//quitando imagenes

var xUno = document.getElementById('close-uno').addEventListener("click",function() {
  document.getElementById('imagen-panda').style.display="none";
});
var xDos = document.getElementById("close-dos").addEventListener("click",function() {
  document.getElementById('imagen-panda-dos').style.display="none";
});
var xtres = document.getElementById('close-tres').addEventListener("click",function() {
  document.getElementById('imagen-panda-tres').style.display="none";
});
var xcuatro= document.getElementById("close-cuatro").addEventListener("click",function() {
  document.getElementById('imagen-panda-cuatro').style.display="none";
});

//Poniendo imagenes
var put = document.getElementById("put");
put.addEventListener("click", function(){
    document.getElementById('imagen-panda').style.display="inline-block";
    document.getElementById('imagen-panda-dos').style.display="inline-block";
    document.getElementById('imagen-panda-tres').style.display="inline-block";
    document.getElementById('imagen-panda-cuatro').style.display="inline-block";
});
//Implementando text
var other= document.getElementById("otro-text");
var extincion = document.getElementById("extincion").addEventListener("click", function(e){
other.classList.toggle("show-text");
});
var text =document.getElementById("text");
var origin = document.getElementById("origin").addEventListener("click", function(e){
  text.classList.toggle("show-text");
});

};
