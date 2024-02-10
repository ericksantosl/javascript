function contar() {
    var inicio = window.document.querySelector('input#iini') 
    var fim = window.document.querySelector('input#ifim')
    var passo = window.document.querySelector('input#ipas')
    var res = window.document.querySelector('div#res')

    if (inicio.value.length == 0 ||  fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERROR] Faltam dados!')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo Inválido! Considerando PASSO = 1')
            p = 1
        }

        if (i < f) {
            for (var c = i ; c <= f ; c += p) {
                res.innerHTML += ` ${c} &#x23E9`
            }
        } else {
            for (var c = i ; c >= f ; c -= p) {
                res.innerHTML += ` ${c} &#x23E9`
            }
        }

        res.innerHTML += '&#x1F3C1'
    }
}