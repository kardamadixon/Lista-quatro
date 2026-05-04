let frutas = ["maçã", "banana", "uva", "laranja", "morango"];
let busca = prompt("Digite o nome da fruta que deseja buscar:");
let encontrada = false;
for (let i = 0; i < frutas.length; i++) {

    if (frutas[i] === busca) {
        document.write("Fruta encontrada na posição: " + i);
        encontrada = true;
        break; 
    }
}
if (!encontrada) {
    document.write("Fruta não encontrada");
}