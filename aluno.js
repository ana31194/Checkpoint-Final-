const aluno = {
    nome: "",
    quantidadeDeFaltas: 0,
    nota: [],
    listaAlunos: [],
  
    //Adicionando Pessoas
    adcAluno: function (nome, quantidadeDeFaltas, nota, media) {
      const pessoa = {
        nome: nome,
        quantidadeDeFaltas: quantidadeDeFaltas,
        nota: nota,
      };
      this.listaAlunos.push(pessoa);
    },
  
    //Adicionando Falta
    faltas: function () {
      this.quantidadeDeFaltas++;
    },
  
    //Calculando o Valor da Nota Média
    calcularMedia: function (estudante) {
      let total= 0, media;
     estudante.nota.forEach((nota) => {
          total += nota;
        });
        
        return media= total / estudante.nota.length;

    },
  };
  
  //exportando
  module.exports = aluno;

