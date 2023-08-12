import { Audio } from "./Audio.js";

export class Musica extends Audio{
    private _album: string;
    private _cantor: string;
    private _genero: string;

    // constructor() {
    //     super();
    // }

    public get album(): string {
        return this._album;
    }

    public set album(album: string) {
        this._album = album;
    } 

    public get cantor(): string {
        return this._cantor;
    }

    public set cantor(cantor: string) {
        this._cantor = cantor;
    }

    public get genero(): string {
        return this._genero;
    }

    public set genero(genero: string) {
        this._genero = genero;
    }

    public get classificacoes(): number {
        if(this.totalReproducoes > 2000){
            return 10;
        } else {
            return 7;
        }
    }
}