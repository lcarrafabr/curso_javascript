function tratarErroELancar(erro){
    //throw new Error('Mensagem de erro ')//Lanço uma mensagem de erro
    //throw 10
    //throw true
    //throw 'Mensagem: A String não pode ser vazia o animal'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}


function imprimeNomegritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('Final')
    }
}

const obj = {nome: 'Luciano'}
imprimeNomegritado(obj)