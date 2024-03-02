class TV {
    constructor() {
      this._volume = 0; // Inicializando o volume com 0
    }
  
    // Getter para obter o volume
    get volume() {
      return this._volume;
    }
  
    // Setter para definir o volume
    set volume(novoVolume) {
      // Verificando se o novo volume está dentro do intervalo válido (0 a 100)
      if (novoVolume >= 0 && novoVolume <= 100) {
        this._volume = novoVolume;
        console.log(`Volume definido para ${novoVolume}`);
      } else {
        console.error("O volume deve estar entre 0 e 100.");
      }
    }
  
    // Método para aumentar o volume
    aumentarVolume() {
      if (this._volume < 100) {
        this._volume++;
        console.log("Volume aumentado para", this._volume);
      } else {
        console.log("O volume já está no máximo.");
      }
    }
  
    // Método para diminuir o volume
    diminuirVolume() {
      if (this._volume > 0) {
        this._volume--;
        console.log("Volume diminuído para", this._volume);
      } else {
        console.log("O volume já está no mínimo.");
      }
    }
}
  

let tv1 = new TV()

tv1.volume = 50

tv1.aumentarVolume()
tv1.diminuirVolume()