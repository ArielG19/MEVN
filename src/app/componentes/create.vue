<template lang="html">
	<div>
		<!--Agregamos prevent para que el formulario no se recargue despues de enviar datos-->
		<form v-on:submit.prevent="Agregar" class="card">
				<div class="card-title"><h3>Agregar personas</h3></div>

				<div class="card-body">
					<div class="form-group">
						<input type="text" v-model="persona.nombre" placeholder="Agregar nombre" class="form-control">
					</div>

					<div class="form-group">
						<input type="text" v-model="persona.salario" placeholder="Agregar salario" class="form-control">
					</div>
					
					<button type="submit" class="btn btn-primary">Guardar</button>
				</div>
		</form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				persona:{

				}
			}
		},
		methods:{
			Agregar(){
				//probando guardar datos
				//console.log(this.persona);
				//mandamos los datos en la propiedad q los contiene
				this.axios.post('/personas',this.persona)
				.then(res => {
					//console.log(res)
					//agregamos redireccion despues de guardar.
					this.$router.replace({name:'Display'});
				})
				.catch(err => console.log(err)); 

			}
		}
	}
</script>