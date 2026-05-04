let amigos = [];
for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome do amigo " + (i + 1) + ":");
    amigos.push(nome);
}
for (let i = 0; i < amigos.length; i++) {
    document.write(amigos[i] + "<br>");
}