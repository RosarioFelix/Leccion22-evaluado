window.onload=function(){

var imagenes=document.getElementById('imagenes');

for(var i = 1 ; i <=4; i++){
  var creandoDiv = document.createElement("div");
  creandoDiv.classList.add("grid");
  var figura = document.createElement("figure");
  figura.classList.add("img-panda");
  var img = document.createElement("img");
  img.classList.add("img-box");
  var span = document.createElement("span");
  span.innerHTML="X";
  span.setAttribute("id","close")
  img.setAttribute("src", "assets/img/"+i+".jpg");



 figura.appendChild(img);
 figura.appendChild(span);
 creandoDiv.appendChild(figura);
 imagenes.appendChild(creandoDiv);

}
var close = document.getElementById("close");
close.addEventListener("click",function(){
   document.getElementsByTagName("img")[0].style.display="none";
});
//Poniendo imagenes
var put = document.getElementById("put");
put.addEventListener("click", function(){
  document.getElementById("imagenes").style.display="block";
});

//Implementando text

var extincion = document.getElementById("extincion");
extincion.addEventListener("click", function(){
  document.getElementById("otro-text").style.visibility="hidden";
});

var origin = document.getElementById("origin");
origin.addEventListener("click", function(){
  document.getElementById("otro-text").style.visibility="visible";
});


};
