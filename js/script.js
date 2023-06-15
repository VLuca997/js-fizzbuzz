// Ciclo For da 1 a 100
// Verifico i multipli di 3 e di 5
for (let i = 1; i <= 100; i++) {
// Creazione di un nuovo elemento <div>
    let element = document.createElement("div");
    element.classList.add("number");

    if (i % 3 === 0 && i % 5 === 0) {   // con questo "if" dico che: Se il numero è multiplo sia di 3 che di 5 allora stampa ("FrizzBuzz")
        element.style.backgroundColor = "#f0466f"; //Aggiungo elemento CSS
        element.innerHTML = "FizzBuzz";
    } 
    else if (i % 3 === 0) {   // con questo "else if" dico che: Se il numero è multiplo di 3 allora stampa ("Frizz")
        element.style.backgroundColor = "#0cd6a1"; //Aggiungo elemento CSS
        element.innerHTML = "Fizz";
    } 
    else if (i % 5 === 0) {   // con questo "else if" dico che: Se il numero è multiplo di 5 allora stampa ("Frizz")
        element.style.backgroundColor = "#ffd166"; //Aggiungo elemento CSS
        element.innerHTML = "Buzz";
    } 
    else { // Con questo "else" invece dico che se il numero non è multiplo di 3 e 5 allora stampa il valore che deve avere.
        element.style.backgroundColor = "#1389b2"; //Aggiungo elemento CSS
        element.innerHTML = i;
    }
    // Aggiungi l'elemento al documento HTML
    document.getElementById("output").appendChild(element); 

    // Verifico quando "i" è multiplo di 7 per inserire un'interruzione di linea ed andare a capo.
    if (i % 7 === 0) {
        let lineBreak = document.createElement("br");
        document.getElementById("output").appendChild(lineBreak);
    }
}