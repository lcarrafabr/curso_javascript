// coleção dinâmica de pares chave/valor
const produto = new Object

produto.nome = 'cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto.['Marca do produto']