import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import './style.scss';

import App from './App.vue';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app');

