// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z' // não fazer isso!

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h.`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // super referencia(faz o shadowing) o protótipo.
    }
}

Object.setPrototypeOf(ferrari, carro)// 'setPrototypeOf' estabelece uma relação entre os objetos.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerar(100)
console.log(volvo.status())

ferrari.acelerar(240)
console.log(ferrari.status())