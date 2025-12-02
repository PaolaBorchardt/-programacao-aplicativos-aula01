const prompt = require("prompt-sync")();

while (true) {
  console.log("\n=== CALCULADORA ===");
  console.log("Escolha uma operação:");
  console.log("1 - Soma");
  console.log("2 - Subtração");
  console.log("3 - Multiplicação");
  console.log("4 - Divisão");
  console.log("5 - Sair");

  const opcao = Number(prompt("Digite o número da operação: "));

  if (opcao === 5) {
    console.log("Calculadora encerrada");
    break;
  }

  const n1 = Number(prompt("Digite o primeiro número: "));
  const n2 = Number(prompt("Digite o segundo número: "));

  // === VALIDAÇÃO ===
  if (n1 === 0 || n2 === 0) {
    console.log("❌ ERRO: Nenhum dos números pode ser 0!");
    console.log("Voltando ao menu...");
    continue; // volta para o menu
  }

  let resultado;

  switch (opcao) {
    case 1:
      resultado = n1 + n2;
      console.log("Resultado da soma:", resultado);
      break;

    case 2:
      resultado = n1 - n2;
      console.log("Resultado da subtração:", resultado);
      break;

    case 3:
      resultado = n1 * n2;
      console.log("Resultado da multiplicação:", resultado);
      break;

    case 4:
      resultado = n1 / n2;
      console.log("Resultado da divisão:", resultado);
      break;

    default:
      console.log("Opção inválida!");
  }

  console.log("\n-----------------------------------");
}
