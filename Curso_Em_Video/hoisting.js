// hoisting é o comportamento do JavaScript de mover as declarações de variáveis para o topo do 
// escopo, ou seja, para o início do código. Isso significa que as variáveis declaradas com var são "içadas" 
// para o topo do escopo, mas não são inicializadas até que a linha de código onde são declaradas seja executada.

//console.log('Minha idade atual é: ', idade)

//var idade = 47 variavel global não pode ser referenciada antes de ser declarada, 
// isso é o que chamamos de hoisting, a variável é "içada" para o topo do escopo, 
// mas não é inicializada até que a linha de código onde é declarada seja executada.
let idade = 47

console.log('Minha idade atual é: ', idade)
