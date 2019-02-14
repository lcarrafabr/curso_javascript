const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90.toFixed(2)
prod1['Desconto legal'] = 0.50 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.95,
    obj: {
        blabla: 1,
        obj: {
            blabla2: 2
        }
    }
}
console.log(prod2)

//'Não é JSON a estrutura acima mas abaixo é uma estrutura JSON'
'{ "nome": "Camisa regata", "preco": 50.99 }'