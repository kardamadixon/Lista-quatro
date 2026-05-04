// Vetor de notas
let notas = [];

// Pedindo 5 notas
for (let i = 0; i < 5; i++) {
    let nota = Number(prompt("Digite a nota do aluno " + (i + 1) + ":"));
    notas.push(nota);
}

// 1. Somando as notas
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

// 2. Calculando a média
let media = soma / notas.length;

// 3. Contando quem está acima da média
let acimaMedia = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        acimaMedia++;
    }
}

// Mostrando resultados
document.write("Média da turma: " + media + "<br>");
document.write("Alunos acima da média: " + acimaMedia);