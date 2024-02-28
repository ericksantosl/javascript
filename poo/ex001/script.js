class Carro {
    constructor (pnome, ptipo) {
        this.nome = pnome
        if (ptipo == 1) {
            this.tipo = 'Popular'
            this.vel = 160
        } else if (ptipo == 2) {
            this.tipo = 'Caminhonete'
            this.vel = 180
        } else if (ptipo == 3) {
            this.tipo = 'Esportivo'
            this.vel = 250
        }
    }

    getNome() {
        return this.nome
    }

    getTipo() {
        return this.tipo
    }

    getVel() {
        return this.vel
    }

    setNome(nome) {
        this.nome = nome
    } 

    setTipo(tipo) {
        this.tipo = tipo
    }

    setVel(vel) {
        this.vel = vel
    }

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade: ${this.vel}`)
        console.log(`---------------`)
    }
}

let c1 = new Carro('Gol', 1)
let c2 = new Carro('Porshe', 3)
let c3 = new Carro('S10', 2)





