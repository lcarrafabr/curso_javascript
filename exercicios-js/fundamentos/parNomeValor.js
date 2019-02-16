// par nome/valor
const saudacao = 'Opa' // Contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao 
}

//Objetos são grupos aninhados de pares  nome/valor (chave valor)
const Cliente = {
    nome: 'Luciano',
    idade: 33,
    peso: 95,
    endereco: {
        logradouro: 'Rua legal',
        numero: 1598
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)