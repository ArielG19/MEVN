<template lang="html">
	<div>
		<form v-on:submit.prevent="updatePersona" class="card">
				<div class="card-title"><h3>Actulizar datos personas</h3></div>

				<div class="card-body">
					<div class="form-group">
						<input type="text" v-model="persona.nombre" class="form-control">
					</div>

					<div class="form-group">
						<input type="text" v-model="persona.salario"  class="form-control">
					</div>
					
					<button type="submit" class="btn btn-primary">Actualizar</button>
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
		created(){
			this.getPersona();
		},
		methods:{
			getPersona(){
				//debemos usar el route de vue-router
				this.axios.get('/personas/'+ this.$route.params.id)
				.then(res => {
					this.persona = res.data;
				})
				.catch(err => console.log(err)); 

			},
			updatePersona(){
				//console.log('actulizando', this.persona);
				//actualizamos
				this.axios.put('/personas/'+ this.$route.params.id, this.persona)
				.then(res =>{
					//mandamos a la nueva vista
					this.$router.replace({name:'Display'})
				});
			}
		}
	}

</script>