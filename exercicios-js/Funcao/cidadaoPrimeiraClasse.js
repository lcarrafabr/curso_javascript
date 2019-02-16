//Funlçao em JS é First-Class  Object (Citizens)
//Higher-Order Function

// criar de forma literal
function func1(){ }

//Armazenar em uma variavel
const func2 = function(){ }

//Armazenar dentro de um Array
const array = [function(a, b) { return a + b}, func1, func2]
console.log(array[0] (2, 3))

//Armazena em um atributo de objeto
const obj = {}
    obj.falar = function() {return 'Opa'}

    console.log(obj.falar())

//Passar função como paramentro para outra função
function run (fun){
    fun()
}

run(function() { console.log('Executando ....')})

//Função pode retornar/Conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
// ou
const cincoMais = soma(2, 3)
cincoMais(4)