class person {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    info() {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos!`);
    }
};
