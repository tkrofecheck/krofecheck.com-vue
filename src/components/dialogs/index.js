import Vue from 'vue';

Vue.component('contact-dialog', () =>
  import(/* webpackChunkName: "contact-dialog" */ './ContactDialog.vue'),
);

Vue.component('contact-form', () =>
  import(/* webpackChunkName: "contact-form" */ './ContactForm.vue'),
);

Vue.component('project', () =>
  import(/* webpackChunkName: "project" */ './Project.vue'),
);

Vue.component('project-dialog', () =>
  import(/* webpackChunkName: "project-dialog" */ './ProjectDialog.vue'),
);

Vue.component('project-gallery', () =>
  import(/* webpackChunkName: "project-gallery" */ './ProjectGallery.vue'),
);
