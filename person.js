//module Wrapper Function
(function(exports, require, module, __filename, __dirname) {

})

console.log(__dirname, __filename)
console.log(module)

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`my name is ${this.name} i'm 30 years old`)
    }
}

module.exports = Person


