/*

Posso substituir por var (de preferência evitar) let (pode mudar) ou const (nunk muda)

var nome = "Paola";
var idade = 17;
var peso = 67;
var altura = 1.65;
var imc = peso / (altura * altura);

console.log(nome, idade, peso, altura, imc);

if (true) {
    let y = 20
}
console.log(y);  //esse console n vai rodar pq está fora do bloco*/

/*//O const é mutável
const pessoa = { nome: "João" };
pessoa.nome = "Maria";  //troca a informação
console.log(pessoa);

//pessoa = {};*/


/* Tipoos de dados primitivos
let nome = "Paola";
let idade = 17;
let peso = 67;
let altura = 1.65;
let imc = peso / (altura * altura);
let ehAluno = true
let numeroDaSorte = {}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof peso);
console.log(typeof altura);
console.log(typeof imc);
console.log(typeof ehAluno);
console.log(typeof numeroDaSorte);*/

/*Conversão de tipos

// 1 - * com duas strings numéricas
let resultado1 = "5" * "2";
console.log(resultado1); // 10 (number)

// 2 - / com string e number
let resultado2 = "10" / 2;
console.log(resultado2); // 5 (number)

// 3 - - com number e string
let resultado3 = 7 - "3";
console.log(resultado3); // 4 (number)

// 4 - + com duas strings numéricas
let resultado4 = "5" + "2";
console.log(resultado4); // "52" (string, concatenação)

// 5 - * com string e number
let resultado5 = "4" * 3;
console.log(resultado5); // 12 (number)

// 6 - / com number e string
let resultado6 = 9 / "3";
console.log(resultado6); // 3 (number)

// 7 - - com duas strings numéricas
let resultado7 = "8" - "5";
console.log(resultado7); // 3 (number)

// 8 - + com string e number
let resultado8 = "6" + 4;
console.log(resultado8); // "64" (string, concatenação)

let resultado9 = "5" + 2
console.log (resultado9) //vai retornar 52
//Precisa de uma conversão explícita
let resultados = 5 + 2
console.log (resultados)


console.log(Number("13"));
//➡️ Retorna um número, no caso 13 (tipo number).

console.log(String(13));
//ele vai converter o número 13 para uma string. "13"



// Operadores Aritméticos
console.log(10 + 5);  // 15
console.log(10 % 3);  // 1 (Resto)
console.log(2 ** 3);  // 8 (Exponenciação)

// Comparação (use estrito ===)
console.log(5 == "5");  // true (EVITE!) verifica so o formato que está sendo escrito
console.log(5 === "5"); // false (CORRETO) verifica o tipo do dado 

*/

/*ESTRUTURAS CONDICIONAIS
//IF / ELSE
let nota = 6;
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
*/

/*TERNÁRIO mais curto e prático ? = se
let idade = 14;
const status = idade >= 18 ? "Maior" : "Menor";
console.log(status)
  
*/


/* For clássico
for (let i = 0; i < 10; i+=3) {
  console.log(i);
}

// For…of (Mais limpo para arrays)
const frutas = ["Maçã", "Banana", "laranja"];
for (const fruta of frutas) {
  console.log(fruta);
}



//DECLARAÇÃO VS ARROW FUNCTION
// Tradicional

let a = 1
let b = 1

function soma(a, b) {
  return a + b;
}

// Arrow Function (Moderna)
const soma = (a, b) => a + b;

// Sem parâmetros
const ola = () => "Olá!";

/*ESCOPO DE FUNÇÕES

//Variáveis criadas dentro da função só existem lá dentro.

function teste() {
  const segredo = 123;
}

console.log(segredo); // ❌ Erro! */








/*
console.log(true && true);   // t e t → true
console.log(true && false);  // t e f → false
console.log(false && true);  // f e t → false
console.log(false && false); // f e f → false

console.log(true || true);    // t ou t → true
console.log(true || false);   // t ou f → true
console.log(false || true);   // f ou t → true
console.log(false || false);  // f ou f → false

console.log(!true);
console.log(!false); 

console.log(true && "aprovado");   // "aprovado"
console.log(false && "aprovado");  // false
console.log(null && "aprovado");   // null

console.log(true || "aprovado");    // true
console.log(false || "aprovado");   // "aprovado"
console.log(null || "aprovado");    // "aprovado"




let diaSemana = 4;
switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;

  case 2:
    console.log("Segunda-feira");
    break;

  case 3:
    console.log("Terça-feira");
    break;

  case 4:
    console.log("Quarta-feira");
    break;

  case 5:
    console.log("Quinta-feira");
    break;

  case 6:
    console.log("Sexta-feira");
    break;

  case 7:
    console.log("Sábado");
    break;

  default:
    console.log("Dia inválido");
}


let numero = 5;
do {
    console.log(numero);
    numero++;
} 
while (numero < 5) 
*/
