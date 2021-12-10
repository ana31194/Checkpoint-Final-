//importar a lista de alunos
const aluno= require('./estudantes')
const calculo= require('./aluno');

//Objeto Literal
const curso = {
    nomeDoCurso: "Programação Imperativa",
    notaDeAprovacao: 6,
    faltasMaximas: 2,
    listaDeEstudantes: aluno.listaAlunos,

   //Adicionando um novo aluno a lista
    adcEstudantes: function(nome, quantidadeDeFaltas, nota){
        this.listaDeEstudantes.push({
            nome: nome,
            quantidadeDeFaltas: quantidadeDeFaltas,
            nota:nota});
        
    },
    //Adicionando Critérios
    criteriosAprovacao: function(estudante){
        const media = calculo.calcularMedia(estudante);
      
        if(estudante.quantidadeDeFaltas < this.faltasMaximas && media >= this.notaDeAprovacao){
           return `${estudante.nome} foi aprovado!!`;
       }
       else if (estudante.quantidadeDeFaltas === this.faltasMaximas && media > (this.notaDeAprovacao * 0.1 + this.notaDeAprovacao)){
           return `${estudante.nome} foi aprovado!!`;
       }
       else {
           return `${estudante.nome} foi reprovado!!`;
        }
    },

    //Verificando se o aluno foi aprovado
    verificacao: function(){
        let todos = [];
        this.listaDeEstudantes.forEach(estudante => {
           todos.push(this.criteriosAprovacao(estudante));
        });
        return todos;
    }
};

curso.adcEstudantes("Lucas", 1, [10,9,8]);
curso.adcEstudantes("João", 1, [3,3,3]);
console.log('LISTA DE ALUNOS')
console.log(curso.listaDeEstudantes)
console.log('__________________________________________')
console.log('')
console.log('STATUS DOS ALUNOS')
console.log(curso.verificacao());

// console.log(curso.listaDeEstudantes.map( d => curso.criteriosAprovacao(d), aluno.nome));
// console.log('-------------------------')


// console.log(curso.listaDeEstudantes)

