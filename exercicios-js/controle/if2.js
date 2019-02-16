function teste1(num){
    if(num >= 7)
    console.log(num) // se não usar {} em uma estrutura if sempre será considerado a 1° linha o que tiver após sera executado sempre

console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num){
    if(num >= 7);{// o ; virou uma sentença de codigo vazia e será executado o console.log
        console.log(num)
    }
}
teste2(6)
teste2(8)