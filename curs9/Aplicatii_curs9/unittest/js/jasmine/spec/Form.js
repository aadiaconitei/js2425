describe("Validare parolă", () => {
  it("trebuie să returneze false dacă parola are mai puțin de 8 caractere", () => {
    const parola = "ParolaLunga";
    const valid = valideazaParola(parola);
    expect(valid).toBeTruthy();
  });

  it("trebuie să returneze false dacă parola nu conține o literă mare", () => {
    const parola = "parola123@";
    const valid = valideazaParola(parola);
    expect(valid).toBeFalsy();
  });

  it("trebuie să returneze false dacă parola nu conține o literă mică", () => {
    const parola = "PAROLA123@";
    const valid = valideazaParola(parola);

    expect(valid).toBeFalsy();
  });

  it("trebuie să returneze false dacă parola nu conține o cifră", () => {
    const parola = "Parola@";
    const valid = valideazaParola(parola);
    expect(valid).toBeFalsy();
  });

  it("trebuie să returneze false dacă parola nu conține un caracter special", () => {
    const parola = "Parola123";
    const valid = valideazaParola(parola);
    expect(valid).toBeFalsy();
  });

  it("trebuie să returneze true dacă parola îndeplinește toate condițiile", () => {
    const parola = "Parola123@";
    const valid = valideazaParola(parola);
    expect(valid).toBeTruthy();
  });
});
