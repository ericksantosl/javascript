class person {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
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

};

let p1 = new person()

p1.setNome("Erick")

console.log(p1.getNome())
