<template>
  <v-dialog
    v-model="dialog"
    content-class="project-dialog"
    transition="fade-transition"
    scrollable
  >
    <div class="close__btn" @click="closeDialog">
      <v-icon color="white">mdi-close</v-icon>
    </div>

    <project-gallery
      :company="company"
      :name="name"
      :url="url"
      :images="images"
      :imageFolder="imageFolder"
    ></project-gallery>

    <div class="project__text">
      <v-card-title class="pa-2" v-html="name"></v-card-title>
      <v-card-subtitle
        class="pa-2"
        v-html="company"
        @click.prevent="openPage($event, url)"
      ></v-card-subtitle>
      <v-card-subtitle
        v-if="note"
        v-html="note"
        class="pa-2 info"
      ></v-card-subtitle>
    </div>
  </v-dialog>
</template>

<script>
import { bus } from '../../bus';

export default {
  name: 'ProjectDialog',
  data() {
    return {
      company: '',
      name: '',
      url: '',
      note: '',
      dialog: false,
      imageFolder: '',
      images: [],
    };
  },
  created() {
    const vm = this;
    bus.$on(
      'project-dialog',
      function (value, company, name, note, url, images, imageFolder) {
        console.log('open project dialog', {
          value,
          company,
          name,
          note,
          url,
          images,
          imageFolder,
        });
        vm.dialog = value;
        vm.company = company;
        vm.url = url;
        vm.note = note;
        vm.name = name;
        vm.imageFolder = imageFolder;
        vm.images = images;
      },
    );
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    openPage(event, url) {
      window.open(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.close__btn {
  display: fixed;
  z-index: 1000;

  .v-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    text-shadow: 1px 1px black;
  }
}

.project__name {
  font-size: 1.125rem;
  @include respond-above(phablet) {
    font-size: 1.25rem;
  }
}

.project__text {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  color: $white;
}
</style>
