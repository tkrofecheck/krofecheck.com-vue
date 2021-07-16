<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-card v-if="intro" class="mx-auto">
        <v-parallax :src="getImageUrl(background)">
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <span>{{ intro }}</span>
            </v-row>
          </v-card-text>
        </v-parallax>
      </v-card>

      <v-card v-else class="mx-auto my-4" max-width="400">
        <v-parallax :src="getImageUrl(background)" :height="100">
          <v-card-title class="no-break">{{ title }}</v-card-title>
        </v-parallax>

        <v-card-text>
          <div v-if="progress">
            <span v-for="(item, index) in list" :key="index">
              <item-progress
                :color="randomColor(index)"
                :item="item"
                :progress="getProgress(item.years, max)"
              ></item-progress>
            </span>
          </div>
          <div v-else-if="contact">
            <contact-form></contact-form>
          </div>
          <div v-else>{{ formatArray(list) }}</div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ContactForm from './ContactForm.vue';
import ItemProgress from './ItemProgress.vue';

export default {
  name: 'Profile',
  components: {
    ContactForm,
    ItemProgress,
  },
  props: {
    background: {
      type: String,
      default: '',
    },
    contact: {
      type: Boolean,
      default: false,
    },
    intro: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
    max: {
      type: Number,
      default: 0,
    },
    progress: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      buffer: 16,
      colorCache: {},
    };
  },
  methods: {
    formatArray(data) {
      const formattedData = data.map((item, index) => {
        return index < data.length - 1 ? ` ${item}` : ` and ${item}`;
      });
      return formattedData.join(',');
    },
    getImageUrl(img) {
      return require(`../assets/${img}`);
    },
    getProgress(num, max) {
      return Math.floor((num / max) * 100);
    },
    randomColor(id) {
      const r = () => Math.floor(256 * Math.random());

      return (
        this.colorCache[id] ||
        (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`)
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.no-break {
  word-break: normal;
}
</style>
