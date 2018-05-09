//Consta de 2 partes: Declarar y ejecutar

//Declarar
function saludo() {
    console.log("Hola");
}

//Ejecutar
saludo();


//Con parametros
function operacion(digito1, digito2) {
    let resultado = digito1 + digito2;
    console.log(resultado);
}

operacion(5,7);


//Con retorno sin parametros
function retorno() {
    let numero = 5;
    return numero;

}

console.log(retorno());


//Con retorno con parametros
function retornoParametros(numero) {
    return numero;

}
console.log(retornoParametros(10));
console.log(retornoParametros(15));
console.log(retornoParametros(20));