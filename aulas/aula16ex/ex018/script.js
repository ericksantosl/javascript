let numeros = []

function adicionar() {
    let tab = window.document.querySelector('select#isel')

    // Captura o valor digitado pelo usuário
    let number = Number(window.document.querySelector('input#inum').value)

    // Verifica se o valor é válido para continuar
    if (number.length == 0 || number < 1 || number > 100) {
        alert('[ERROR] Algum dado inválido! Verifique e tente novamente.')
    } else {
        // Adiciona esse valor ao vetor
        numeros.push(number)

        // Criando elemento option e manipulando elemento select
        let item = document.createElement('option')
        item.text = `Valor ${number} adicionado!`
        tab.appendChild(item)
    }

    // O resultado do finalizar anterior é apagado quando adicionado outro valor
    res.innerHTML = ''

}

function finalizar() {
    let res = window.document.querySelector('div#res')

    if (numeros.length == 0) {
        alert('Impossível calcular! Adicione valores antes de finalizar.')
    } else {
        // Impede que o usuário imprima vários resultados sequenciais
        res.innerHTML = ''

        // Colocando o array em ordem crescente
        numeros.sort((a, b) => a - b)

        // Maior número do vetor
        maiorNumero = numeros[numeros.length - 1]

        // Menor número do vetor
        menorNumero = numeros[0]

        // Soma de todos os números do vetor
        let soma = 0
        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }

        // Media dos valores do vetor
        let media = soma / numeros.length

        // Imprimindo resultado na tela
        res.innerHTML += `<p>Foram cadastrados ${numeros.length} números;</p>`
        res.innerHTML += `<p>O maior número cadastrado foi: ${maiorNumero};</p>`
        res.innerHTML += `<p>O menor número cadastrado foi: ${menorNumero};</p>`
        res.innerHTML += `<p>Somando todos os valores, o resultado é: ${soma};</p>`
        res.innerHTML += `<p>A média dos valores do vetor é: ${media}.</p>`
    }

}