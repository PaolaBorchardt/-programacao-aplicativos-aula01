const prompt = require("prompt-sync")();

// === Entrada do usuário ===
let quantidade = Number(prompt("Quantos números você quer adicionar ao array? "));

while (isNaN(quantidade) || quantidade <= 0) {
    console.log("⚠️ Digite um número válido maior que 0!");
    quantidade = Number(prompt("Quantos números você quer adicionar ao array? "));
}

// Criar array vazio
let numeros = [];

for (let i = 0; i < quantidade; i++) {
    let valor = Number(prompt(`Digite o número ${i + 1}: `));

    while (isNaN(valor)) {
        console.log("⚠️ Valor inválido! Digite um número.");
        valor = Number(prompt(`Digite o número ${i + 1}: `));
    }

    numeros.push(valor); //coloca o número no array
}

// === Função para contar pares e ímpares ===
function contarParesEImpares(array) {
    let pares = 0;
    let impares = 0;

    for (let num of array) {
        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares, impares };
}

// === Resultado ===
let resultado = contarParesEImpares(numeros);

console.log("\nArray digitado:", numeros);
console.log("Quantidade de números pares:", resultado.pares);
console.log("Quantidade de números ímpares:", resultado.impares);
console.log("Contador finalizado");