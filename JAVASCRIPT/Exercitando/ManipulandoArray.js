//Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("noodejs")

//adicionar no comeco
techs.unshift("sql")

//remover do fim
techs.pop()

//remover do comeco
techs.shift()

//pegar somente alguns elementos do array
techs.slice(1,1)

//remover 1 ou mais itens em qualquer posicao do array
techs.splice(1, 2)

//encontrar a posicao de um elemento no array
let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)