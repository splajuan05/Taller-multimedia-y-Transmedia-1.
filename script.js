console.log("Hola");

const titulo = document.getElementById("TituloDePagina")
let estadoOriginal = true;
console.log(titulo);

titulo.addEventListener("click", () => {

titulo.innerText = "Un nuevo título"
titulo.innerText = "de una tortuga"

if(estadoOriginal === true) {
    titulo.innerText = "Esa es la historia"
    titulo.style.color = "yellow";
}

else{
    titulo.innerText = "Esta es la historia";
    titulo.style.color = "black";
}


});



