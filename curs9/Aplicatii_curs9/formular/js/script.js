// Funcție pentru validarea câmpului de e-mail
function valideazaEmail(email) {
    // Verifica dacă adresa de e-mail are un format valid
    const regex = /^[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
}

// Funcție pentru validarea câmpului de parolă
function valideazaParola(parola) {
    // Verifica dacă parola are cel puțin 8 caractere
    if (parola.length < 8) {
        return false;
    }

    // Verifica dacă parola conține cel puțin o literă mare
    const litereMari = parola.match(/[A-Z]/g);
    if (litereMari === null || litereMari.length === 0) {
        return false;
    }

    // Verifica dacă parola conține cel puțin o literă mică
    const litereMici = parola.match(/[a-z]/g);
    if (litereMici === null || litereMici.length === 0) {
        return false;
    }

    // Verifica dacă parola conține cel puțin o cifră
    const cifre = parola.match(/[0-9]/g);
    if (cifre === null || cifre.length === 0) {
        return false;
    }

    // Verifica dacă parola conține cel puțin un caracter special
    const caractereSpeciale = parola.match(/[!@#$%^&*()?]/g);
    if (caractereSpeciale === null || caractereSpeciale.length === 0) {
        return false;
    }

    return true;
}

// Validarea formularului
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    // Verificați câmpul de e-mail
    const email = document.querySelector("#email").value;
    if (!valideazaEmail(email)) {
        alert("Adresa de e-mail nu are un format valid.");
        event.preventDefault();
        return;
    }

    // Verificați câmpul de parolă
    const parola = document.querySelector("#password").value;
    if (!valideazaParola(parola)) {
        alert("Parola nu îndeplinește condițiile.");
        event.preventDefault();
        return;
    }

    // Formularul este valid, trimiteți datele
    event.preventDefault();
    // ...
});
