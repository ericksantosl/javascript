const objs = [
    {
        nome : "Erick",
        idade : 20,
        trabalhando : false,
        filhos : null,
        detalhes_profissao : {
            profissão : null,
            empresa : null
        },
        hobbies : ["Programar", "Jogar VAVA"]
    },

    {
        nome : "Santos",
        idade : 100,
        trabalhando : true,
        filhos : 4,
        detalhes_profissao : {
            profissão : "Programador",
            empresa : "Google"
        },
        hobbies : ["Dormir", "Jogar LOL"]
    }
]


// JSON

// Convertendo objeto para JSON
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// Convertendo JSON para objeto
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})