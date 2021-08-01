import Vue from 'vue';

Vue.component('project-dialog', () =>
  import(/* webpackChunkName: "project-dialog" */ './ProjectDialog.vue'),
);

Vue.component('project-gallery', () =>
  import(/* webpackChunkName: "project-gallery" */ './ProjectGallery.vue'),
);
