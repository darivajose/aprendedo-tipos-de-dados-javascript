// tipo Number 
// ponto flutuante
// NaN -> Not a Number (não é um número)
//string -> texto

//const meuNumero = 3;

//const primeiroNumero = Number(prompt("Digite o primeiro número:"));
//const segundoNumero = Number(prompt("Digite o segundo número:"));

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoAdicao = primeiroNumero + segundoNumero;
const operacaoDivisao = primeiroNumero / segundoNumero;
const operacaoMultiplicacao = primeiroNumero * segundoNumero;
const operacaoSubtracao = primeiroNumero - segundoNumero;

console.log("O resultado da adição é: " + operacaoAdicao);
console.log("O resultado da divisão é: " + operacaoDivisao);
console.log("O resultado da multiplicação é: " + operacaoMultiplicacao);
console.log("O resultado da subtração é: " + operacaoSubtracao);

// ponto flutuante
const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log("O resultado é:" + novaOperacao);

 // NaN
const nome = "José";
console.log(nome * primeiroNumero);  


