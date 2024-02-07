function carregar() {
    var msg = window.document.querySelector('p#msg')
    var img = window.document.querySelector('img#imagem')
    var agora = new Date()
    var hora = agora.getHours()

    msg.innerHTML = `Você está no periodo das <strong>${hora}</strong> horas`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#0085dc'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#fe7c4f'
    } else if (hora >= 18 && hora <= 23) {
        //BOA NOITE
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#110907'
    }
}

