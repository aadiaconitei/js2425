const joc = document.getElementById('joc');
const btnReset = document.getElementById('btnReset');

const tabla = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

let l, c;
let jucator = "X", ocupate = 0;

btnReset.addEventListener('click', resetGame);
joc.addEventListener('click', (e) => {
  const tg = e.target;
  l = parseInt(tg.getAttribute('l'));
  c = parseInt(tg.getAttribute('c'));
  if (tabla[l][c])
    return;
  tabla[l][c] = jucator;
  tg.innerHTML = jucator;
  if(jucator == "X"){
    tg.style.color='blue';
  }
  else{
    tg.style.color='green';
  }
  ocupate++;
  if (gameOver(l, c, jucator)) {
    alert(`Felicitari ${jucator}! Ai castigat.`);
    btnReset.disabled = false;
  } else if (ocupate == 9) {
    alert('Jocul este remiza!');
    btnReset.disabled = false;
  }
  else {
    schimbaJucator();
  }
});

genereazaTabla();

function gameOver(l, c, jucator) {
  let cnt = 0;
  for (let i = 0; i < 3; i++) {
    if (tabla[l][i] == jucator)
      cnt++;
  }
  if (cnt == 3) return true;
  cnt = 0;
  for (let i = 0; i < 3; i++) {
    if (tabla[i][c] == jucator)
      cnt++;
  }
  if (cnt == 3) return true;
  if (l == c) {
    cnt = 0;
    for (let i = 0; i < 3; i++) {
      if (tabla[i][i] == jucator)
        cnt++;
    }
  } else if (l + c == 2) {
    cnt = 0;
    for (let i = 0; i < 3; i++) {
      if (tabla[i][3 - i - 1] == jucator)
        cnt++;
    }
  }
  if (cnt == 3) return true;
  return false;
}
function resetGame() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      tabla[i][j] = null;
    }
  }
  Array.from(document.querySelectorAll('div[l]')).forEach(x => {
    x.textContent = null;
  });
  document.getElementById('jucator').textContent = jucator;
  ocupate = 0;
  btnReset.disabled = true;
}
function genereazaTabla() {
  let l, c;
  for (let i = 0; i < 9; i++) {
    let e = document.createElement("div");
    l = Math.round((i + 2) / 3) - 1;
    c = Math.round((i) % 3);
    e.setAttribute('l', l);
    e.setAttribute('c', c);
    joc.appendChild(e);
  }
}
function schimbaJucator() {
  jucator = jucator == "X" ? "0" : "X";
  

  document.getElementById('jucator').textContent = jucator;
}