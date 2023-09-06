"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cobra = void 0;
const animal_js_1 = require("./animal.js");
class Cobra extends animal_js_1.Animal {
    exibir(model) {
        const resposta = `A cobra tem ${model} anos de idade.`;
        console.log(resposta);
    }
}
exports.Cobra = Cobra;
