
const prompt = require("prompt-sync")();

let idade = Number(prompt("Qual a sua idade? "));
let categoria = classificarIdade(idade);

function classificarIdade(idade) {
    if (idade < 0 || isNaN(idade)) {
        return "Idade inválida";
    }

    if (idade >= 0 && idade <= 12) {
        return "Criança";
    } else if (idade >= 13 && idade <= 17) {
        return "Adolescente";
    } else if (idade >= 18 && idade <= 64) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

console.log("Você é:", categoria);
console.log("Fim da validação");
