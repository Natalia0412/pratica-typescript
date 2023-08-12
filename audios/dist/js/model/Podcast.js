import { Audio } from "./Audio.js";
export class Podcast extends Audio {
    get getApresentador() {
        return this._apresentador;
    }
    set setApresentador(apresentador) {
        this._apresentador = apresentador;
    }
    get getDescricao() {
        return this._descricao;
    }
    set setDescricao(descricao) {
        this._descricao = descricao;
    }
    get classificacoes() {
        if (this.totalCurtidas > 12) {
            return 10;
        }
        else {
            return 8;
        }
    }
}
