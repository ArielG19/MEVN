//aqui escribiremos las rutas de nuestro servidor.
const express = require('express');
const router = express.Router();
//aqui utilizamos las rutas pero con los modelos
const Persona = require('../models/persona');

//cremos una ruta get que busca por id para obtener los datos.
router.get('/:id',(req,res, next) => {
	//creamos nuestra consulta
	Persona.findById(req.params.id, function(err,persona){
		res.json(persona);
	})
});

//-------------------------ruta get para obtener datos-----------------------------
//probamos nuestra ruta con un mensaje.
router.get('/',(req,res)=>{
	//creamos nuestra consulta
	Persona.find(function(err,personas){
		//si obtenemos un error paramos la aplicacion y q lo muestre
		if(err){
			throw err;
		}else{
			//sino hay error que de una respuesta al navegador con los datos
			res.json(personas);
		}

	})
	/*res.json({
		success:true
	});*/
});

//------------------------ruta post para guardar-----------------------------------------------------------
router.post('/',(req,res)=>{
	//creamos un nuevo modelos de datos
	//recibimos lo que el cliente envia atravez de req.body
	const persona = new Persona(req.body);
	//cuando se recibe la data y es guardada respondemos con un code 200
	persona.save().then(persona => {
		res.status(200).json({persona: 'Persona agregada con exito'});
	}).catch(err => {
		//atrapamos si hay error y devolvemos
		res.status(400).send({persona: 'Error al agregara'});
	});


});

//-----------------------ruta put para actualizar--------------------------------------------------------------------------------
router.put('/:id',(req, res, next)=>{
	//creamos una consulta a la bd y buscamos por id que estamos recibiendo
	//en la colsulta optenemos un error, o la consulta.
	Persona.findById(req.params.id, function(err,persona){
		//si no se encuentra la data, pintamos un error
		if(!persona){
			return next(new Error('No se pudo cargar documento'));
		}else{
			//de lo contrario actualize los datos que tenemos con los nuevos datos traidos por  req.body
			persona.nombre = req.body.nombre;
			persona.salario = req.body.salario;

			persona.save().then(persona => {
				res.status(200).json({persona: 'Persona actualizada con exito'});
			}).catch(err => {
			//atrapamos si hay error y devolvemos
			res.status(400).send({persona: 'Error al actualizar'});
		});

		}
	})


});

//---------------------ruta delete para eliminar--------------------------------------------------------------------------------
router.delete('/:id',(req, res, next)=>{
	//creamos una consulta a la bd y buscamos por id que estamos recibiendo
	//en la colsulta optenemos un error, o la consulta.
	Persona.findOneAndDelete(req.params.id, function(err,persona){
		if(err){
			res.json(err);
		}else{
			res.json('persona eliminada')
		}
	})
});


module.exports = router;