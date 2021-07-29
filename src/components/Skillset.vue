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
          <v-container>
            <v-row>
              <v-col
                v-for="(sublist, idx1) in chunkedList"
                :key="idx1"
                flat
                cols="12"
                sm="4"
              >
                <item-progress
                  v-for="(item, idx2) in sublist"
                  :key="idx2"
                  :color="randomColor(`${idx1}.${idx2}`)"
                  :item="item"
                  :progress="getProgress(item.years, max)"
                ></item-progress>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" align="right">
                <v-btn
                  class="primary"
                  href="https://www.linkedin.com/in/tkrofecheck/"
                  target="_blank"
                  title="LinkedIn"
                >
                  <span class="d-flex align-center justify-space-between">
                    LinkedIn <v-icon>mdi-arrow-right</v-icon>
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ItemProgress from './ItemProgress.vue';
import Parallax from './Parallax.vue';

export default {
  name: 'Skillset',
  components: {
    ItemProgress,
    Parallax,
  },
  props: {
    background: {
      type: String,
      default: '',
    },
    setSize: {
      type: Number,
      default: 1,
    },
    info: {
      type: String,
      default: '',
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
      chunkedList: this.chunkList(this.setSize, this.list),
    };
  },
  methods: {
    chunkList(chunk_size, arr) {
      const group = arr
        .map(function (e, i) {
          return i % chunk_size === 0 ? arr.slice(i, i + chunk_size) : null;
        })
        .filter(function (e) {
          return e;
        });

      console.log('group', group);
      return group;
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

<style lang="scss" scoped></style>
