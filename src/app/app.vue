<template lang="html">
	<div>
		<h1>Vue funcionando</h1>
		<!--Agregamos un boton de esta manera para agregar-->
		<router-link :to="{name:'Create'}" class="btn btn-primary">Agregar</router-link>

		<!--Aqui va nuestro componente display-->
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	
</script>