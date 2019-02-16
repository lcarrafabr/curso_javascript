//Novo recurso do ES2015

const Pessoa  = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = Pessoa
console.log(nome, idade)

const {nome: n, idade: i} = Pessoa
console.log(n,i)

const {sobrenome, bemHumorada = true} = Pessoa //Não existe esses atributos / Usar atributo = algumaCoisa seta um valor padrao
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep} } = Pessoa
console.log(logradouro, numero, cep)