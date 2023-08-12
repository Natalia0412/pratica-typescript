export class Audio {
    constructor() {
        this._totalReproducoes = 0;
        this._totalCurtidas = 0;
    }
    //constructor(){}
    get titulo() {
        return this._titulo;
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }
    get totalCurtidas() {
        return this._totalCurtidas;
    }
    get totalReproducoes() {
        return this._totalReproducoes;
    }
    get classificacoes() {
        return this._classificacoes;
    }
    curte() {
        this._totalCurtidas++;
    }
    reproduz() {
        this._totalReproducoes++;
    }
}
