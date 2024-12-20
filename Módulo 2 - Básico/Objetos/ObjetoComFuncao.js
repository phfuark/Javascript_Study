let pessoa = {
    nome: 'Paulo',
    sobrenome: 'Preciliano',
    idade: 90,
    nomeCompleto: function(){
        return (`${this.nome} ${this.sobrenome}`)
    }
}

console.log(pessoa.nomeCompleto());
// console.log(`${pessoa.nome} ${pessoa.sobrenome}`)