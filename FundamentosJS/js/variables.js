//Variables numericas
let number = 3;
console.log("numero", number);

//Variables de texto
let palabra = "palabras";
console.log("Palabra", palabra);

//Variables booleanas
let boolean = true;
console.log("Boolean", boolean);

//Arreglos
let colores = ["rojo","amarrillo"];
console.log("colores", colores[1]);

//Objetos
let jugo = {ingrediente1:"fresa",
            ingrediente2:"mandarina",
            ingrediente3:"banano"};
console.log(jugo.ingrediente1);

//Variables DOM
let caja = document.querySelector("#caja");
console.log("caja", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "black";

let cajas = document.querySelectorAll(".cajas");
console.log("caja", cajas);