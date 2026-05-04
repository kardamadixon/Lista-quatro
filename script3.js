let numeros = [];
for (let i = 0; i < 5; i++) {
    let valor = Number(prompt("Digite o número " + (i + 1) + ":"));
    numeros.push(valor);
}
let maior = numeros[0];
let menor = numeros[0];
for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] > maior) {
        maior = numeros[i];
    }

    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}
document.write("Maior número: " + maior + "<br>");
document.write("Menor número: " + menor);