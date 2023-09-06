import { Animal } from "./animal.js";


export class Cobra extends Animal <number>{
    exibir(model: number): void {
        const resposta = `A cobra tem ${model} anos de idade.`
        console.log(resposta)
    }

  
    
}