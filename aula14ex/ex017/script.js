function gerar() {
    var number = window.document.querySelector('input#inum')
    var n = Number(number.value)
    var tab = window.document.querySelector('select#tab')
    var r
    var res = window.document.querySelector('option#res')

    if (n == '') {
        alert('[ERROR] Por favor, digite um número!')
    } else {
        tab.innerHTML = ''
        for (var c = 0 ; c <= 10 ; c++) {
            r = n * c
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${r}`
            tab.appendChild(item)
        }
    }
}