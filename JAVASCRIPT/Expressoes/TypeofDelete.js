//Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.

/* delete */
const person = {
    name: 'Vitor',
    age: 22,
}
delete person.age

console.log(person)

//Nesse caso estamos deletando a propriedade age do objeto person.

console.log(typeof "Vitor")

//Aqui vemos qual o tipo de dado que temos, nesse caso uma string.


//Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.

// condição ? valor1 : valor2

// Café da manhã top
let pao = false
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

// De cima para baixo, do mais importante ao menos importante.

/*

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 

*/
