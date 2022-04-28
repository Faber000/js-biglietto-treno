const age = prompt("quanti anni hai?");
const km = prompt("quanti kilometri vuoi percorrere?");

price = 0.21*km;

if(age < 18) {
    price = price - (20*price)/100;
}

else if (age >= 65) {
    price = price - (40*price)/100;
}

rounded = price.toFixed(2);

document.getElementById("price").innerHTML = rounded;