let base = Number(prompt("Digite o número base:"));
let quantidade = Number(prompt("Quantos múltiplos você quer ver?"));

let multiplos = [];

for (let i = 1; i <= quantidade; i++) {
    multiplos.push(base * i);
}

document.write("Múltiplos: " + multiplos);