let barra = document.getElementById("barra");
let botones = document.querySelectorAll("#boton");
botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
       barra.classList.toggle("show");
    })
})

let enlace= document.querySelectorAll(".barra__nav a")
enlace.forEach(function(enlace) {
    enlace.addEventListener("click", function(event) {
      event.preventDefault();
      enlace.classList.toggle("clicked");
    });
  });