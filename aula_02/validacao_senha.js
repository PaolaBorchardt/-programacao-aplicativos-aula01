const prompt = require("prompt-sync")();

function validarSenha() {
    let tentar = true;

    while (tentar) {
        let senha = prompt("Digite sua senha:");

        // Verifica se digitou algo
        if (!senha || senha.trim() === "") {
            console.log("Erro: A senha não pode ser vazia.");
        }
        else if (senha.length < 8) {
            console.log("Erro: A senha deve ter pelo menos 8 caracteres.");
        }
        else if (!/[A-Z]/.test(senha)) {
            console.log("Erro: A senha deve conter pelo menos uma letra MAIÚSCULA.");
        }
        else if (!/[a-z]/.test(senha)) {
            console.log("Erro: A senha deve conter pelo menos uma letra minúscula.");
        }
        else if (!/[0-9]/.test(senha)) {
            console.log("Erro: A senha deve conter pelo menos um número.");
        }
        else if (!/[\W_]/.test(senha)) { //caractere NÃO alfanumérico
            console.log("Erro: A senha deve conter pelo menos um caractere especial.");
        }
        else {
            console.log("Senha válida! ✔️");
            return; // encerra a função pois a senha é válida
        }

        // Se chegou até aqui é porque deu erro → perguntar se quer tentar de novo
        let resposta = prompt("Senha inválida. Deseja tentar novamente? (s/n)");

        if (resposta.toLowerCase() !== "s") {
            console.log("Operação cancelada.");
            tentar = false;
        }
    }
}

// Executa a função
validarSenha();
