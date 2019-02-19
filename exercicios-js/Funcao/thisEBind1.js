const pessoa = {
    saudacao: 'Bom dia!!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// Conflito entre paradigmas: funcional e OO

const falarDePEssoa = pessoa.falar.bind(pessoa)
falarDePEssoa()