const N = prompt("di quanti biglietti vuoi calcolare il prezzo?")

for (let i=0; i < N; i++) {
    let discount = false;
    const age = prompt("quanti anni ha il viaggiatore numero "+(i+1)+"?");
    const km = prompt("quanti kilometri vuole percorrere?");

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

    document.getElementById("container").innerHTML += "biglietto numero "+ (i+1) + ": " + "<br>";

    if (discount) {
        document.getElementById("container").innerHTML +="prezzo iniziale: " + firstPrice + "$" + "<br>";
        document.getElementById("container").innerHTML +="prezzo scontato: " + rounded + "$" + "<br><br>";
    }

    else {
        document.getElementById("container").innerHTML +="prezzo biglietto: " + firstPrice + "$" + "<br><br>";
    }
}




