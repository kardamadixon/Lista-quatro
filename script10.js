let numeros = [1, 2, 2, 3, 4, 4, 4, 5];
let semRepetidos = [];

for (let i = 0; i < numeros.length; i++) {

    if (!semRepetidos.includes(numeros[i])) {
        semRepetidos.push(numeros[i]);
    }
}

document.write("Original: " + numeros + "<br>");
document.write("Sem repetidos: " + semRepetidos);