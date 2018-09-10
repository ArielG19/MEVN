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
//configuracion del enrutador
const routes = [];

const router = new VueRouter({mode:'history'}, {routes:routes});
new Vue(Vue.util.extend({router}, App)).$mount('#app');