export abstract class Animal <T> {
    private _especie: string;
    private _nome: string;
    private _idade: number;
    private _raca: string;


    constructor(especie: string, nome: string, idade: number, raca: string) {
        this._especie = especie;
        this._nome = nome;
        this._idade = idade;
        this._raca = raca;
    }

    public get getEspecie(): string{
        return this._especie;
    }

    public set setEspecie(especie: string) {
        this._especie = especie;
    }

    public get getNome(): string {
        return this._nome;
    }

    public set setNome(nome: string) {
        this._nome = nome;
    }

    public get getIdade(): number {
        return this._idade;
    }

    public set setIdade(idade: number) {
        this._idade = idade;
    }

    public get getRaca(): string {
        return this._raca;
    }

    public set setRaca(raca: string) {
        this._raca = raca;
    }

    abstract exibir(model: T): void;

}