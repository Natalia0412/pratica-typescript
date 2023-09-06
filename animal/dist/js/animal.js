"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(especie, nome, idade, raca) {
        this._especie = especie;
        this._nome = nome;
        this._idade = idade;
        this._raca = raca;
    }
    get getEspecie() {
        return this._especie;
    }
    set setEspecie(especie) {
        this._especie = especie;
    }
    get getNome() {
        return this._nome;
    }
    set setNome(nome) {
        this._nome = nome;
    }
    get getIdade() {
        return this._idade;
    }
    set setIdade(idade) {
        this._idade = idade;
    }
    get getRaca() {
        return this._raca;
    }
    set setRaca(raca) {
        this._raca = raca;
    }
}
exports.Animal = Animal;
