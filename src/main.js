import Vue from 'vue'
import App from './App.vue'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';

import store from './__data__/store'
import router from './router'

Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
