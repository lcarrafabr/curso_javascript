const pessoa = {nome:  'Luciano'}
pessoa.nome = 'Debora'

console.log(pessoa)

//pessoa = {nome: 'Cristiano'} <= Essa linha dará erro se tentar descomentar

Object.freeze(pessoa) // Conjela o objetoe não é possivel alterar o objeto 

pessoa.nome = 'Duda'

console.log(pessoa.nome)

const pessoaCOnstante = Object.freeze({nome: 'João'})
console.log(pessoaCOnstante)