"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const animal_js_1 = require("./animal.js");
class Cachorro extends animal_js_1.Animal {
    exibir(model) {
        const resposta = `Meu cachorro se chama ${model}`;
        console.log(resposta);
    }
}
exports.Cachorro = Cachorro;
