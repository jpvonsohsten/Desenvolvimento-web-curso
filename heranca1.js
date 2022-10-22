const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // '__proto__' serve para acessar o protótipo do objeto, o objeto pai.
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function myObject() {}
console.log(typeof Object, typeof myObject)
console.log(Object.prototype, myObject.prototype)