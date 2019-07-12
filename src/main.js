import Vue from 'vue'
import App from './App.vue'

import persistentState from 'vue-persistent-state';

const initialState = {
    name: ''  // will get value from localStorage if found there
};

Vue.config.productionTip = false;
Vue.use(persistentState, initialState);

new Vue({
    render: h => h(App),
}).$mount('#app')
