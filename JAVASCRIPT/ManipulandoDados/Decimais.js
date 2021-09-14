//Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ","). O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.

//transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula

let number = 234.32434
console.log(number.toFixed(2).replace(".",","))