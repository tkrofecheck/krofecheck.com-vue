<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-card class="mx-auto my-4" tile flat elevation="5">
        <parallax
          :title="title"
          :info="info"
          :background="background"
        ></parallax>

        <v-card-text>
          {{ formatArray(list) }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Parallax from './Parallax.vue';

export default {
  name: 'Hobby',
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
    list: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    formatArray(data) {
      const formattedData = data.map((item, index) => {
        return index < data.length - 1 ? ` ${item}` : ` and ${item}`;
      });
      return formattedData.join(',');
    },
  },
};
</script>

<style lang="scss" scoped></style>
