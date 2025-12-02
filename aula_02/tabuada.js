const prompt = require("prompt-sync")();

// Entrada com validação
let n;

do {
    n = Number(prompt("Digite um número maior que 0 para ver a tabuada: "));

    if (isNaN(n) || n <= 0) {
        console.log("⚠️  Valor inválido! Digite um número maior que 0.");
    }

} while (isNaN(n) || n <= 0);

// Função que imprime a tabuada
function tabuada(numero) {
    console.log(`\n=== Tabuada de ${numero} ===`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
    console.log("=== calculadora encerrada ===\n");
}

// Chama a função
tabuada(n);
