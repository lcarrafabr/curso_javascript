const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums){
    if(x == 5){
        break //interrompe a repetição e para no indice 5
    }
    console.log(`${x} = ${nums[x]}`)
}

for(let y in nums){
    if(y == 5){
        continue //interrompe o indice 5 não considerou ele e desviou direto para o proximo inice no caso o 6
    }
    console.log(`y = ${y} = ${nums[y]}`)
}

externo: for(let a in nums){
    for(let b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`) 
    }
}