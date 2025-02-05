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
