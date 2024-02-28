class Pessoa {
    constructor(pnome, pidade) {
        this.nome = pnome
        this.idade = pidade
    }

    getNome() {
        return this.nome
    }

    getIdade() {
        return this.idade
    }

    setNome(nome) {
        this.nome = nome
    }

    setIdade(idade) {
        this.idade = idade
    }

    info() {
        console.log(`Nome: ${this.getNome}`)
        console.log(`Idade: ${this.getIdade}`)
        console.log(`-----------------`)
    }
}