// coleção dinâmica de pares chave/valor
const produto = new Object

produto.nome = 'cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Luciano',
        idade: 34,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 10000,
            bairro: 'PQP',
            cidade: 'São Paulo',
            estado: 'SP'
        }
    },
    condutores: [{
        nome: 'Debora',
        idade: 30
    }, {
        nome: 'Dolly',
        idade: 18
    }],
    calcularValorSeguro: function(){
        //...
    }
}

//Posso acessaros atributos a aprtir da aniotação . (ponto)
carro.proprietario.endereco.numero = 100

//posso acessar atraves dos [ ] mesmo que não os tenha definido.
carro ['proprietario'] ['endereco'] ['logradouro'] = 'Av gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro


console.log(carro)
