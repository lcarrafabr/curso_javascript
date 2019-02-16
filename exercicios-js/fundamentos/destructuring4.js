function rand([min = 0, max = 100]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //flor arredonda para baixo
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
//console.log(rand()) // Dessa forma dá erro pis está tentando desestruturar nulo ou undefined