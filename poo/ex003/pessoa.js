function Pessoa(pnome, pidade) {
    this.nome = pnome,
    
    this.idade = pidade,

    this.getNome = function() {
        return this.nome
    },

    this.getIdade = function() {
        return this.idade
    },

    this.setNome = function(nome) {
        this.nome = nome
    },

    this.setIdade = function(idade) {
        this.idade = idade
    },

    this.info = function() {
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