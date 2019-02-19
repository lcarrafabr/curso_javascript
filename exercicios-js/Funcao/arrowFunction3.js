let comparaCOmThis = function(param){
    console.log(this === param)
}

comparaCOmThis(global)//No Node o atrobuto global é Global no brownser é o window

const obj = {}
comparaCOmThis = comparaCOmThis.bind(obj)
comparaCOmThis(global)
comparaCOmThis(obj)

let comparaCOmThisArrow = param => console.log(this === param)
comparaCOmThisArrow(global)
comparaCOmThisArrow(module.exports)

comparaCOmThisArrow = comparaCOmThisArrow.bind(obj)
comparaCOmThisArrow(obj)
comparaCOmThisArrow(module.exports)