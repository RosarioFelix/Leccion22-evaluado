window.onload=function(){

var imagenes=document.getElementById('imagenes');

for(var i = 1 ; i <=4; i++){
  var creandoDiv = document.createElement("div");
  creandoDiv.classList.add("grid");
  var figura = document.createElement("figure");
  figura.classList.add("img-panda");
  var img = document.createElement("img");
  img.classList.add("img-box");
  

  img.setAttribute("src", "assets/img/"+i+".jpg");

 figura.appendChild(img);
 creandoDiv.appendChild(figura);
 imagenes.appendChild(creandoDiv);
}

/*
var quitar = document.getElementById("quitar");
var close= document.getElementById('close');
close.addEventListener("click",function(){
   document.getElementsByTagName("img")[1].style.display="none";*/
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
