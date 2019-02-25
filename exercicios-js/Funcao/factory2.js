//Factory simples
function criarPessoa(nome, sobrenome){
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

console.log(criarPessoa('Luciano', 'Carrafa'))
console.log(criarPessoa('Débora', 'da C S Carrafa Benfica'))

function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 3999.99))