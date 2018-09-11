//importamos vue para que vue sepa como entender datos de un servodr remoto
import Vue  from 'vue';
import VueRouter  from 'vue-router';
//utilizamos vue
Vue.use(VueRouter);

import VueAxios  from 'vue-axios';

import axios  from 'axios';
Vue.use(VueAxios, axios);
//alert('vue funciona');

//requerimos nuestro archivos vue
import App from './app.vue';
//configuracion del enrutador. en otras palabras aqui registramos nuestros componentes y sus rutas para ser utilizados.

//trabajamos con nuestros componente y vue-router
import Display from './componentes/display.vue';
import Create from './componentes/create.vue';
import Edit from './componentes/edit.vue';

const routes = [
	{//de esta forma se cargara de primero
		name: 'Display',
		path:'/',
		component:Display
	},
	{
		name:'Create',
		path:'/agregar-persona',
		component: Create
	},
	{
		name:'Edit',
		path:'/editar-persona/:id',
		component: Edit
	}

];

//aqui utilizamos vue-router para pasar nuestro componentes y montarlos en el app.
const router = new VueRouter({mode:'history',routes:routes});
new Vue(Vue.util.extend({router}, App)).$mount('#app');