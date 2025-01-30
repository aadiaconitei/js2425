function helloWorld() {
  return "Hello World";
}

function sum(number1, number2) {
  number1 = number1 * 100;
  number2 = number2 * 100;
  let sum = number1 + number2;
  sum = sum / 100;
  return Number(sum.toFixed(2));
}

function dif(number1, number2) {
  return number1 - number2;
}

function inm(number1, number2) {
  return number1 * number2;
}

function imp(number1, number2) {
  return number1 / number2;
}

function media(number1, number2) {
  return (number1 + number2) / 2;
}

function factorial(number) {
  if (number < 0) {
    throw new Error("No factorial");
  } else if (number == 1 || number == 0) {
    return 1;
  } else {
    return number * this.factorial(number - 1);
  }
}

function fibonacci(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}

function isPrime(num) {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num !== 1 && num !== 0;
}

// Scriem un test care verifica daca este un numar par
// Apoi scriem functia
// TDD
