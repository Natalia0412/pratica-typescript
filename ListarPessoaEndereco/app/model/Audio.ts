export class Audio {
    private _titulo: string;
    public readonly duracao: number;
    private _totalReproducoes: number = 0;
    private  _totalCurtidas: number = 0;
    private  _classificacoes: number;
    
    //constructor(){}

    public get titulo(): string {
        return this._titulo;
    }

    public set titulo(titulo: string){
        this._titulo = titulo;
    }

    public get totalCurtidas(): number {
        return this._totalCurtidas;
       
    }

    public get totalReproducoes(): number {
        return this._totalReproducoes;
    }

    public get classificacoes(): number {
        return this._classificacoes;
    }

    public curte(): void {
        this._totalCurtidas ++;
    }
   
    public reproduz(): void {
        this._totalReproducoes ++;
    }
}