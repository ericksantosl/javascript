const Pessoas = {
    nome: '',

    idade: 10,

    getNome: function() {
        return this.nome
    },

    getIdade: function() {
        return this.idade
    },

    setNome: function(nome) {
        this.nome = nome
    },

    setIdade: function(idade) {
        this.idade = idade
    },
}

let arrayPessoas = []
let res = document.querySelector('.res')

function addElement() {
    //res.innerHTML = ''
    arrayPessoas.map((p) => {
        const div = document.createElement('div')
        div.setAttribute("class", "pessoa")
        div.innerHTML += `Nome: ${p.getNome()}<br>Idade: ${p.getIdade()}
        <br>-----------------`
        res.appendChild(div)
    })
}

function adicionar() {
    
    
    let nome = document.querySelector('#iname')

    let idade = document.querySelector('#iidade')

    let p = Pessoas

    p.setNome(nome.value)
    p.setIdade(idade.value)

    arrayPessoas.push(p)

    addElement()

    console.log(p.getNome())

    arrayPessoas = []

    nome.value = ''
    idade.value = ''
    nome.focus()

    
}