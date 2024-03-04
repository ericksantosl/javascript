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

    // Métodos

    ligar() {
        this._ligado = true
        console.log('A TV está ligada!')
    }

    desligar() {
        this._ligado = false
        console.log('A TV está desligada!')
    }

    aumentarVolume() {
        if (this._volume < 100 && this._ligado == true) {
            this._volume++
            console.log(`Volume da TV alterado! Volume: ${this._volume}`)
        } else if(this._ligado == false) {
            console.log(`A TV precisa estar ligada!`)
        } else {
            console.log(`O volume já está no máximo! Volume: ${this._volume}`)
        }
        
    }

    diminuirVolume() {
        if (this._volume > 0 && this._ligado == true) {
            this._volume--
            console.log(`Volume da TV alterado! Volume: ${this._volume}`)
        } else if(this._ligado == false) {
            console.log(`A TV precisa estar ligada!`)
        } else {
            console.log(`O volume já está no mínimo! Volume: ${this._volume}`)
        }
        
    }
}

let tv1 = new tv();

console.log(tv1.ligado); // Deve imprimir "false" (TV inicialmente desligada)
console.log(tv1.volume); // Deve imprimir "50" (Volume inicial)

tv1.ligar(); // Deve imprimir "A TV está ligada!"
tv1.aumentarVolume(); // Deve imprimir "Volume da TV alterado! Volume: 51"
tv1.diminuirVolume(); // Deve imprimir "Volume da TV alterado! Volume: 50"
tv1.volume = 80; // Deve imprimir "O volume da TV foi alterado. Agora está em 80"

tv1.desligar(); // Deve imprimir "A TV está desligada!"

tv1.aumentarVolume(); // Deve imprimir "A TV precisa estar ligada!"
tv1.diminuirVolume(); // Deve imprimir "A TV precisa estar ligada!"

tv1.ligar(); // Deve imprimir "A TV está ligada!"

// Testando aumento de volume até o máximo
for (let i = 0; i < 21; i++) {
    tv1.aumentarVolume();
}

// Testando diminuição de volume até o mínimo
for (let i = 0; i < 101; i++) {
    tv1.diminuirVolume();
}
