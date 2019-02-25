/**Na Function declaration posso executar
 * a função antes de chama-la pois o interpretador carrega primeiro as
 * funções (function declaration)
 */
console.log(soma(3, 7))


//console.log(sub(3, 7))  só posso chamar function expression depois de declarar-las
//console.log(mult(7, 2)) só posso chamar function named expression depois de declara-la
//Function declaration

function soma(x, y){
    return x + y
}

//function expression
const sub = function(x, y){
    return x - y
}

// named function expression
const mult = function mult(x, y){
    return x * y
}