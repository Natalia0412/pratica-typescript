import { Cachorro } from "./model/cachorro.js";
import { Cobra } from "./model/cobra.js";



const animal2 = new Cachorro('Cachorro', 'Spike', 2, 'Poodle');
animal2.exibir(animal2.getNome);

const animal1 = new Cobra('Mamba-negra', 'Jurema', 1, 'Dendroaspis Polylepis');
animal1.exibir(animal1.getIdade);

