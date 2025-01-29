let suma = [8, 2, 3].reduce((r, x) => r + x);
console.log(suma);

const myArr = [1, 2, 3, 4];
// operatorul spread: ... - ne arata ca variabila ce urmeaza dupa acest operator este un array
let newArr = [5, 6, 7, 8, ...myArr];
console.log(newArr);