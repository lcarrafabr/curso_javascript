const pessoa = {
    nome: 'Luciano',
    idade: 34,
    peso: 105
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

//Ou

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2020'
})

pessoa.dataNascimento = '01/01/2021' // Como não é writable não tem como mudar é como o freeze
console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa))

const dest = {a: 1}
const o1 = { b: 2}
const o2 = { c:3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(obj)