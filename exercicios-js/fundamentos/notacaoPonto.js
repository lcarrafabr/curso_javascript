console.log(Math.ceil(6.4))

const obj1 = {}
obj1.nome = 'bola'
//obj1 ['nome'] = 'bola2' //Posso criar um objeto usando a linha acima ou essa linha comentada

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('exec')
    }
}

const Obj2 = new Obj('Cadeira')
const Obj3 = new Obj('Mesa')
console.log(Obj2.nome)
console.log(Obj3.nome)
Obj3.exec()