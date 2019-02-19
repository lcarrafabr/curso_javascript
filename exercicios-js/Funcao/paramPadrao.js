//Estratégia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1(), soma1(3), soma1(0, 0, 0))//O problema desse exemplo é que se passar Zero ele entende como falso e seta 1

//Estratégias 2, 3 e 4 para gerar valores padrões
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 //Este exemplo o numero 1 é o indice [] começando em zero
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2 ,3), soma2(0, 0, 0))

//Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1){
    return a+ b + c
}
console.log(soma2(), soma2(3), soma2(1, 2 ,3), soma2(0, 0, 0))