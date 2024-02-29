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

let pessoas = []

const res = document.querySelector('.res')

function addPessoa() {
    res.innerHTML = ''
    pessoas.map((p) => {
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${p.getNome()}<br>Idade: ${p.getIdade()}<br>--------------------`
        res.appendChild(div)
    })
}

function adicionar() {
    let nome = document.querySelector('#iname')

    let idade = document.querySelector('#iidade')

    let p = new Pessoa(nome.value, idade.value)

    pessoas.push(p)

    nome.value = ""
    idade.value = ""
    nome.focus()

    addPessoa()

}