function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = window.document.querySelector('input#iano')
    var res = window.document.querySelector('div#res')
    var fsex = window.document.getElementsByName('sex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value <= 0 || fano.value > ano) {
        alert('[ERROR] Verfique seus dados e tente novamente!')
    } else {
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-h.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-h.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-h.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-h.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos. <br>`
        res.appendChild(img)
    }
}