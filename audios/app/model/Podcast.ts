import { Audio } from "./Audio.js";

export class Podcast extends Audio{
    private _apresentador: string;
    private _descricao: string;

    public get getApresentador(): string {
        return this._apresentador;
    }

    public set setApresentador( apresentador: string)  {
       this._apresentador = apresentador;
    }

    public get getDescricao(): string {
        return this._descricao;
    }

    public  set setDescricao(descricao: string) {
        this._descricao = descricao;
    }

    public get classificacoes(): number {
        if(this.totalCurtidas > 12) {
            return 10;
        } else {
            return 8;
        }
    }
}