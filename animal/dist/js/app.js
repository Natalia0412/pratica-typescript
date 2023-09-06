"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cachorro_js_1 = require("./model/cachorro.js");
const cobra_js_1 = require("./model/cobra.js");
const animal2 = new cachorro_js_1.Cachorro('Cachorro', 'Spike', 2, 'Poodle');
animal2.exibir(animal2.getNome);
const animal1 = new cobra_js_1.Cobra('Mamba-negra', 'Jurema', 1, 'Dendroaspis Polylepis');
animal1.exibir(animal1.getIdade);
