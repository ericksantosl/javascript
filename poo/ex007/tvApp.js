class tv {
    constructor () {
        this._ligado = false
        this._volume = 50
    }

    //Getters

    get ligado() {
        return this._ligado;
    }

    get volume() {
        return this._volume;
    }

    //Setters

    set volume(novoVolume) {
        if (novoVolume >= 0 && novoVolume <=100 && this._ligado === true) {
            this._volume = novoVolume
            console.log(`O volume da TV foi alterado. Agora está em ${novoVolume}`)
        } else if(this._ligado === false) {
            console.log(`ERROR! A TV precisa estar ligada!`)
        } else {
            console.log(`ERROR! O volume precisar estar entre 0 e 100`)
        }
    }

    ligar() {
        this._ligado = true
        console.log('A TV está ligada!')
    }

    desligar() {
        this._ligado = false
        console.log('A TV está desligada!')
    }
}

let tv1 = new tv()

