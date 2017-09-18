var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      descricao: {
         type: String,
         required: true
      },
      especificacoes: {
         type: String,
      },
      categoria: {
         type: mongoose.Schema.ObjectId,
         ref: 'Tipo',
         required: true
      },
      patrimonio: {
         type: Number
      }
   });

   return mongoose.model('Receita', schema);

}