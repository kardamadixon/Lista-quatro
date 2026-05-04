let numeros = [];
for (let i = 0; i < 10; i++) {
    let valor = Number(prompt("Digite o número " + (i + 1) + ":"));
    numeros.push(valor);
}
let pares = [];
for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    }
}
document.write("Números digitados: " + numeros + "<br>");
document.write("Números pares: " + pares);