//aqui modelamos nuestros datos
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//tip en mongodb los datos se guardan en colecciones y se pueden nombrar
const personaSchema = new Schema({
	nombre: {type: String},
	salario: {type:Number}
},{
	collection: 'colección_persona'
});

// Exportamos el modelo para usarlo en otros ficheros o modulos
module.exports = mongoose.model('Persona', personaSchema);