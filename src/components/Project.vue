<template>
  <v-dialog v-model="dialog" fullscreen>
    <template v-slot:activator="{ on, attrs }" class="mx-auto">
      <div class="d-flex align-center justify-space-between">
        {{ name }}
        <v-btn color="primary" class="ma-2" dark v-bind="attrs" v-on="on">
          View
        </v-btn>
      </div>
    </template>

    <v-carousel class="project__dialog" hide-delimiters height="100%">
      <div class="close__btn" @click="cancel">
        <v-icon color="white">mdi-close</v-icon>
      </div>
      <v-carousel-item
        v-for="(image, index) in images"
        :key="`${image}-${index}`"
        :src="getImage(image.name)"
        contain
      >
      </v-carousel-item>
    </v-carousel>
    <div class="project__text">
      <v-card-title class="pa-2" v-html="name"></v-card-title>
      <v-card-subtitle
        class="pa-2"
        v-html="company"
        @click="openPage"
      ></v-card-subtitle>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {
    company: {
      type: String,
      default: '',
    },
    display: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    imageFolder: {
      type: String,
      default: '',
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    cancel() {
      this.dialog = false;
    },
    getImage(img) {
      return require(`../assets/portfolio/${this.imageFolder}/${img}`);
    },
    openPage() {
      this.$emit('open');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.close__btn {
  text-shadow: 1px 1px black;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  z-index: 1000;
}

.project__dialog {
  background-color: rgba(0, 0, 0, 0.8);
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
  color: $white;
}
</style>
