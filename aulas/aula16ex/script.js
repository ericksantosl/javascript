let numeros = []

function adicionar() {
    let tab = window.document.querySelector('select#isel')

    // Captura o valor digitado pelo usuário
    let number = window.document.querySelector('input#inum').value

    // Verifica se o valor é válido para continuar
    if (number.length == 0 || number < 1 || number > 100) {
        alert('[ERROR] Algum dado inválido! Verifique e tente novamente.')
    } else {
        // Adiciona esse valor ao vetor
        numeros.push(number)

        // Criando elemento option e manipulando elemento select
        var item = document.createElement('option')
        item.text = `Valor ${number} adicionado!`
        tab.appendChild(item)
    }

    

}

function finalizar() {
    
}