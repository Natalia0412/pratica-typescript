export class MinhasPreferidas {
    inclui(audio) {
        if (audio.classificacoes >= 9) {
            console.log(audio.titulo + ' é considerado sucesso absoluto');
        }
        else {
            console.log(audio.titulo + ' também é um dos que todo mundo esta curtindo');
        }
    }
}
