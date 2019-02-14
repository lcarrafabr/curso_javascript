const peso1 = 1.1
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) // pega o valor 7.935516129032259 e fixa 2 casas decimais 7.94
console.log(media.toString()) // converte para String
console.log(media.toString(2))// valor binario
console.log(typeof media)
console.log(typeof Number)