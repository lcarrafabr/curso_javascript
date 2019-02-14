let valor //não inicializada.
console.log(valor)

valor = null;
console.log(valor)
//console.log(valor.toString()) //Erro porque a variavel está null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.55
console.log(produto) //o console mostra {preco: 3.55}

produto.preco = undefined // Evitar fazer isso quando quiser zerar o obj ou variavel, usar o null
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)