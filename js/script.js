// Ciclo For da 1 a 100
// Verifico i multipli di 3 e di 5
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && 5 ===0) {   // con questo "if" dico che: Se il numero è multiplo sia di 3 che di 5 allora stampa ("FrizzBuzz")
        console.log("FrizzBuzz"); 
    }
    else if (i % 3 === 0) {   // con questo "else if" dico che: Se il numero è multiplo di 3 allora stampa ("Frizz")
        console.log("Frizz");
    }
    else if(i % 5 === 0) {   // con questo "else if" dico che: Se il numero è multiplo di 5 allora stampa ("Frizz")
        console.log("Buzz");
    }
    else {
        console.log(i);  // Con questo "else" invece dico che se il numero non è multiplo di 3 e 5 allora stampa il valore che deve avere.
    }
}