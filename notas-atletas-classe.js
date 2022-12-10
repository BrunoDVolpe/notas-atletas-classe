class CompeticaoGinasticaArtistica {
  constructor(atletas){
    this.atletas = atletas;
  }

    obterNomeDoAtleta(atleta){
        return atleta.nome;
    }

    obterNotasDoAtleta(atleta){
        return atleta.notas.sort(function(a,b){return a - b});
    }

  obterMediaValidaDoAtleta(atleta) {
    let notas = this.obterNotasDoAtleta(atleta).slice(1,4);
    return notas.reduce(function(total, atual){
      return total + atual;
    }, 0)/notas.length
  }

  obterResultados() {
    for(let i = 0; i < this.atletas.length; i++) {
        console.log(`Atleta: ${this.obterNomeDoAtleta(atletas[i])}
Notas Obtidas: ${this.obterNotasDoAtleta(atletas[i])}
Média Válida: ${this.obterMediaValidaDoAtleta(this.atletas[i])}
`)
    }
  }
}

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

let competicaoAlunos = new CompeticaoGinasticaArtistica(atletas);
competicaoAlunos.obterResultados();