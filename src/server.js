//hacemos uso del modulo path para usar los directorios o carpetas
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
//configuramos nuestro servidor 
const app = express();
//hacemos requerimiento de las rutas
const personaRouter = require('./routes/persona');
//hacemos uso de mongo
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//creamos nuestra conexion a la bd
mongoose.connect('mongodb://localhost/prueba',{
	useNewUrlParser: true
}).then(() => console.log('mongoose connect')).catch(err => console.log("Not Connected to Database ERROR! ", err));

//setting
app.set('port',process.env.PORT || 3000);

//midleware
app.use(cors());
app.use(bodyParser.json());
//static file -- archivos que no cambian
//accedemos a la carpeta public

//hacemos uso de las rutas
app.use('/personas',personaRouter);

app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), () => {
 	console.log('servidor en el puerto', app.get('port'));
});