import { MinhasPreferidas } from "./model/MinhasPreferidas.js";
import { Musica } from "./model/Musica.js";
import { Podcast } from "./model/Podcast.js";

const musica = new Musica();
musica.titulo = 'Dance';
musica.album = 'Shake out';
musica.cantor = "Florence and The Machine";
musica.genero = "folk";
for (let index = 0; index < 1000; index++) {
    musica.reproduz();
    
}



const musica1 = new Musica();
musica1.titulo = 'Samba';
musica1.album = 'Deixa a vida me levar';
musica1.cantor = "Zeca Pagodinho";

let listaDeMusicas = Array<Musica>();
listaDeMusicas.push(musica);
listaDeMusicas.push(musica1);
console.log(listaDeMusicas);

const podcast = new Podcast();
podcast.setApresentador = 'Natália Barros';
podcast.setDescricao = 'Podcast sobre como é a vida da Natália Barros';
podcast.titulo = 'MyLife';


const podcast1 = new Podcast();
podcast1.setApresentador = 'Joao Cleber';
podcast1.setDescricao = 'Podcast sobre historias macabras';
podcast1.titulo = 'Historias macabras';



const podcast2 = new Podcast();
podcast2.setApresentador = 'Vivian';
podcast2.setDescricao = 'Podcast sobre gostar de música';
podcast2.titulo = 'Curtir musica';
podcast2.reproduz();
podcast2.curte();


for (let index = 0; index < 7; index++) {
    podcast.reproduz();
    
}

for (let index = 0; index < 15; index++) {
    podcast.curte();
    
}

for (let index = 0; index < 22; index++) {
    podcast1.curte();
    podcast1.reproduz();
    
}

const preferidas = new MinhasPreferidas();
preferidas.inclui(musica);
preferidas.inclui(podcast);
preferidas.inclui(podcast1);
   

const listaDePodcast = Array<Podcast>();
listaDePodcast.push(podcast);
listaDePodcast.push(podcast1);
listaDePodcast.push(podcast2);
console.log(listaDePodcast);
