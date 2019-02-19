//Função normal
let drobro = function(a){
    return 2 * a
}

// tirei a palavra function e inseri a =>
drobro = (a) => {
    return 2 * a
}

//Se houver apenas 1 parametro pode fazer dessa forma (Quanto tira as {} o retorno é implicito)
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function(){
    return 'Ola'
}

ola = () => 'Ola' //Para uma função sem parametros use ()
ola = _ => 'Ola'  //Ou use _ mas underline é um parametro, mas o java desconsidera se não for usado

console.log(ola())