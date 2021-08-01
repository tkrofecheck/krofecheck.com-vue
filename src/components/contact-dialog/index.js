import Vue from 'vue';

Vue.component('contact-dialog', () =>
  import(/* webpackChunkName: "contact-dialog" */ './ContactDialog.vue'),
);

Vue.component('contact-dialog', () =>
  import(/* webpackChunkName: "contact-dialog" */ './ContactForm.vue'),
);
