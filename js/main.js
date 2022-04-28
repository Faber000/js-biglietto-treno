let discount = false;
const age = prompt("quanti anni hai?");
const km = prompt("quanti kilometri vuoi percorrere?");

firstPrice = 0.21*km;

if(age < 18) {
    finalPrice = firstPrice - (20*firstPrice)/100;
    discount = true;
}

else if (age >= 65) {
    finalPrice = firstPrice - (40*firstPrice)/100;
    discount = true;
}

else {
    finalPrice = firstPrice;
}

rounded = finalPrice.toFixed(2);

if (discount) {
    document.getElementById("price").innerHTML ="prezzo iniziale: " + firstPrice + "$";
    document.getElementById("price-d").innerHTML ="prezzo scontato: " + rounded + "$";
}

else {
    document.getElementById("price").innerHTML ="prezzo biglietto: " + firstPrice + "$";
}
