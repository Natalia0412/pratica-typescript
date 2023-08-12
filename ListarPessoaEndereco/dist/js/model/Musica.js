import { Audio } from "./Audio.js";
export class Musica extends Audio {
    // constructor() {
    //     super();
    // }
    get album() {
        return this._album;
    }
    set album(album) {
        this._album = album;
    }
    get cantor() {
        return this._cantor;
    }
    set cantor(cantor) {
        this._cantor = cantor;
    }
    get genero() {
        return this._genero;
    }
    set genero(genero) {
        this._genero = genero;
    }
    get classificacoes() {
        if (this.totalReproducoes > 2000) {
            return 10;
        }
        else {
            return 7;
        }
    }
}
