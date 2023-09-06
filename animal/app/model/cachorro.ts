import { Animal } from "./animal.js";

export class Cachorro extends Animal<String> {
    exibir(model: String): void {
        const resposta: string = `Meu cachorro se chama ${model}`;
        console.log(resposta);
      }
    
}