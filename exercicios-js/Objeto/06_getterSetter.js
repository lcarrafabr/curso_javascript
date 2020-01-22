const sequencia = {
    _valor: 1, //Convenção, é uma variavel que deve ser acessada internamente dentro do objeto sequencia
    get valor() { return this._valor++ },
    set valor(valor) { 
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)