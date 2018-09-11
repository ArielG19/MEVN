<template lang="html">
	<div>
		<h3>Listado de personas</h3>
		<table class="table table-striped">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">Nombre</th>
			      <th scope="col">Salario</th>
			      <th scope="col">Opciones</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr v-for="persona in personas">
			      <td>{{persona._id}}</td>
			      <td>{{persona.nombre}}</td>
			      <td>{{persona.salario}}</td>
			      <td>
			      	<a href="#" v-on:click="eliminarPersona(persona._id, persona.nombre)" class="btn btn-danger">Eliminar</a>
			      	<router-link :to="{name:'Edit', params:{id:persona._id} }" class="btn btn-primary">Editar</router-link>
			      </td>		      
			    </tr>
			  </tbody>
		</table>
	</div>
</template>

<script>
	export default{
		//data - aqui definimos los datos que vamos a usar en el html
		//data renorna un objeto que contine los datos.
		data(){
			return{
				//este array queda vacio por q se va a llenar con los datos de la bd
				personas:[]
			}
		},
		created(){
			this.fetchPersonas();
		},
		methods:{
			fetchPersonas(){
				//const url = "http://localhost:3000/personas"
				//obtenemos los datos atravez de axios y los pintamos por consola.
				this.axios.get('/personas')
				.then(res => {this.personas = res.data;})
				.catch(err => console.log(err)); 
			},
			eliminarPersona(id,nombre){
				//console.log(id);
				//creamos una confirmacion para eliminar
				const response = confirm("Eliminar esta persona: "+ nombre)
				if(response){
					this.axios.delete('/personas/'+ id)
					.then(res => {
					//limpiamos el arreglo personas por id, es decir le va a quitar 1 al arreglo
					 this.personas.splice(id, 1);
					 })
					.catch(err => console.log(err)); 
				}
				return;
				
			}
		}
	}
</script>