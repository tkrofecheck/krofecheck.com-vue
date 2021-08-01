import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store';
import vuetify from './plugins/vuetify';

// require('./components/contact-dialog'); // contact me dialog
require('./components/project-dialog'); // project gallery dialog

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
