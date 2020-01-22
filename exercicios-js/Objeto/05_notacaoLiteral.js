const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}//Metodo antigo

const obj2 = { a, b, c}//Metodo novo
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valotAttr = 7.87

const obj3 = {}

obj3[nomeAttr] = valotAttr//Metodo antigo
console.log(obj3)

const obj4 = {[nomeAttr]: valotAttr}//Metodo novo
console.log(obj4)

const obj5 = {
    funcao1: function(){//metodo antigo
        //... 
    },
    funcao2(){//Metodo novo
        //...
    }
}

console.log(obj5)