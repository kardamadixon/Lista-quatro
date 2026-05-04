let numeros = [];
for (let i = 0; i < 5; i++) {
    let valor = Number(prompt("Digite o número " + (i + 1) + ":"));
    numeros.push(valor);
}

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
document.write("A soma total é: " + soma);