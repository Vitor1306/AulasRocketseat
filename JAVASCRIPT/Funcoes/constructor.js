function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + "esta andando"
    }
}

const joao = new Person("Joao")
const vitor = new Person("Vitor")
console.log(joao)
console.log(vitor)