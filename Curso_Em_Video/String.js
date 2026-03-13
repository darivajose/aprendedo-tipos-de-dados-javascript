// esssa é a forma de realizar um comentário em JavaScript

/* 
essa é a forma de realizar um comentário em JavaScript
com mais de uma linha
*/

// strings são textos, ou seja, um conjunto de caracteres, como por exemplo: "Olá Mundo", "JavaScript", "Curso em Vídeo", "2B", etc.

const texto1 = "Olá Mundo";
const texto2 = 'JavaScript';
const texto3 = `Curso em Vídeo`;
const texto4 = "2";
const StringDeNumeros = "Oi José  'tudo bem'"; //StringDeNumeros é uma string que contém números, mas é 
                                              // tratada como texto, ou seja, não pode ser utilizada para
                                              //  operações matemáticas


console.log(texto1);
console.log(texto2);
console.log(texto3);
console.log(texto4);
console.log(StringDeNumeros);

// concatenação de strings (+)
const nome = "Maria";
const idade = 27;
const frase = "Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.";
console.log(frase);

const nome1 = "José ";
const sobrenome = "Dariva";
const nomeCompleto = nome1 + "" + sobrenome;
console.log(nomeCompleto);
console.log (nome1 + sobrenome); // sem espaço entre nome e sobrenome
 
const nomeCompleto2 = `${nome1} ${sobrenome}`; // template string (template literals)
console.log(nomeCompleto2);''

// template string (template literals)
//const fraseTemplate = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
//console.log(fraseTemplate);