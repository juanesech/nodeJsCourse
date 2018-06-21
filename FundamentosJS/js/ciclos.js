let cajas = document.querySelectorAll(".cajas");

for (let i = 0; i < cajas.length; i++){
    cajas[i].style.width = "50px";
    cajas[i].style.height = "50px";
    cajas[i].style.backgroundColor = "blue";
    cajas[i].style.marginTop = "5px";
}

//While
console.log("  ");
let n = 1;
while (n <= 5){
    n++;
    console.log("n",n);
}

//Do While
console.log("  ");
let p = 1;
do{
    console.log("p",p);
    p++
} while (p <=5 );

