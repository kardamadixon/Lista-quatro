let numeros = [];
for (let i = 0; i < 5; i++) {
    let valor = Number(prompt("Digite o número " + (i + 1) + ":"));
    numeros.push(valor);
}
for (let i = numeros.length - 1; i >= 0; i--) {
    document.write(numeros[i] + "<br>");
}