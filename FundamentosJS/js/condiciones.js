let a = 5;
let b = 10;

if (a > b){
    console.log("a es mayor que b");
}else if (a === b){
    console.log("a es igual a b");
}else {
    console.log("a no es igual que b y a no es mayor que b");
}

let dia = "domingo";

switch (dia){
    case "sabado":
        console.log("Hoy es sabado");
        break;

    case "martes":
        console.log("Hoy es martes");
        break;

    case "jueves":
        console.log("Hoy es jueves");
        break;

    case "domingo":
        console.log("Hoy descanso");
        break;

    default: console.log("Voy a estudiar javascript");
}