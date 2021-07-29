<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-card class="mx-auto mb-8" tile flat elevation="5">
        <parallax
          :title="title"
          :intro="true"
          :info="info"
          :background="background"
        ></parallax>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Parallax from './Parallax.vue';

export default {
  name: 'Intro',
  components: {
    Parallax,
  },
  props: {
    background: {
      type: String,
      default: '',
    },
    info: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    getImageUrl(img) {
      return require(`../assets/${img}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
