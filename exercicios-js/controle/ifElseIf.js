Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirresultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de honra!')
    }else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    }else if(nota.entre(0, 3.99)){
        console.log('Reprovado - Quero meu BigMac sem cebola')
    }else{
        console.log('Nota inválida')
    }
}

imprimirresultado(10)
imprimirresultado(7)
imprimirresultado(5)
imprimirresultado(2)
imprimirresultado(-1)