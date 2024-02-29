const Pessoas = {
    nome: 'Bruno',
    getNome: function() {
        return this.nome
    },
    setNome: function(nome) {
        this.nome = nome
    }
}

const p2 = Pessoas

p2.nome = 'Erick'

console.log(Pessoas.nome)
console.log(p2.getNome)