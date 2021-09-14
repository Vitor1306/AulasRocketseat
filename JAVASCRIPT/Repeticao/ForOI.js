//For Of
let nome = 'Vitor'

for(let char of nome) {
    console.log(char)
}

//For In

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}