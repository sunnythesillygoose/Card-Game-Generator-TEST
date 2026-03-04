var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var title = document.getElementById("title");
output.innerHTML = slider.value;
title.style.fontSize = slider.value + 'px'

slider.oninput = function() {
  output.innerHTML = this.value
  title.style.fontSize = this.value + "px"
}

function myFunction() {
  const node = document.getElementById("targetImage");
  const clone = node.cloneNode(true);
  document.body.appendChild(clone);
  
}

function show1() {
   pet1.classList.remove("hide");
   pet2.classList.add("hide");
   pet3.classList.add("hide");
}

function show2() {
   pet1.classList.add("hide");
   pet2.classList.remove("hide");
   pet3.classList.add("hide");
}

function show3() {
   pet1.classList.add("hide");
   pet2.classList.add("hide");
   pet3.classList.remove("hide");
}

function show4() {
   pet4.classList.remove("hide");
   pet5.classList.add("hide");
   pet6.classList.add("hide");
}

function show5() {
   pet4.classList.add("hide");
   pet5.classList.remove("hide");
   pet6.classList.add("hide");
}

function show6() {
   pet4.classList.add("hide");
   pet5.classList.add("hide");
   pet6.classList.remove("hide");
}

function mouse(x){
  x.style.fontSize = 200 + 'px'
}