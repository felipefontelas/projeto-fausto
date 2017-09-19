/*
var recursos = [
   {
      '_id': 1,
      'descricao': 'Projetor 1',
      'tipo': 'Projetor'
   },
   {
      '_id': 2,
      'descricao': 'Laboratório 3',
      'tipo': 'Laboratório de computadores'
   },
   {
      '_id': 3,
      'descricao': 'Controle remoto ADS 2',
      'tipo': 'Controle remoto de TV'
   },
   {
      '_id': 4,
      'descricao': 'Laboratório 1',
      'tipo': 'Laboratório de computadores'
   }
];
*/

module.exports = function(app) {

   var controller = {};

   var Receita = app.models.Receita;

   controller.listar = function(req, res) {
   
      Receita.find().exec().then(
         function(receitas) {       // Callback se der certo
            res.json(receitas);
         },
         function(erro) {
            console.error(erro);    // Callback se der errado
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      );
   
   };

   controller.obterUm = function(req, res) {
      var idReceita = req.params.id;

      var receita = receitas.filter(function(receita){
         return receita._id == idReceita;
      });

      if(receita[0]) {
         // Retorna o primeiro elemento do vetor filtrado
         res.json(receita[0]);
      }
      else{
         res.status(404).send('Receita não encontrada');
      }

   }

   controller.excluir = function(req, res) {

      var idReceita = req.params.id;

      // Filtra o vetor 'recursos', gerando o vetor
      // 'remanescentes' com todos os registros, exceto
      // o que tiver sido excluído
      var remanescentes = receitas.filter(function(rec) {
         return rec._id != idReceita;
      });

      // Se houve exclusão, o tamanho do vetor 'remanescentes'
      // será menor do que o do vetor 'recursos'
      if(remanescentes.length < receitas.length) {
         receitas = remanescentes;
         res.status(200).send('Receita excluída');
      }
      else {
         res.status(404).send('Receita para exclusão não encontrada');
      }

   }

   return controller;

}