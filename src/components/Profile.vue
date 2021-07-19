<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-card v-if="intro" class="mx-auto mb-4" tile>
        <v-parallax :src="getImageUrl(background)" class="intro">
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text>
            <span>{{ intro }}</span>
          </v-card-text>
        </v-parallax>
      </v-card>

      <v-card v-else class="mx-auto my-4" tile>
        <v-parallax
          :src="getImageUrl(background)"
          :height="100"
          class="no-intro"
        >
          <v-card-title class="no-break">{{ title }}</v-card-title>
        </v-parallax>

        <v-card-text>
          <div v-if="progress" class="d-flex justify-space-between flex-wrap">
            <v-card
              v-for="(sublist, idx1) in chunkedList"
              :key="idx1"
              class="d-flex flex-column align-stretch mb-2 mx-1"
              width="45%"
            >
              <item-progress
                v-for="(item, idx2) in sublist"
                :key="idx2"
                :color="randomColor(`${idx1}.${idx2}`)"
                :item="item"
                :progress="getProgress(item.years, max)"
              ></item-progress>
            </v-card>
          </div>
          <div v-else-if="contact">
            <v-dialog
              v-model="dialog"
              transition="dialog-bottom-transition"
              scrollable
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  class="ma-2"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Send a Message!
                </v-btn>
              </template>
              <contact-form @cancelMessage="closeContactForm"></contact-form>
            </v-dialog>
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
    divided: {
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
      dialog: false,
      chunkedList: this.divided > 0 ? this.chunkList(10, this.list) : [],
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
    closeContactForm($event, value) {
      this.dialog = value;
    },
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
.intro {
  @include respond-above(phablet) {
    .v-card__title {
      font-size: 2rem;
    }

    .v-card__text {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
  }
}
.no-intro {
  @include respond-above(phablet) {
    .v-card__title {
      font-size: 1.75rem;
    }
  }
}
.no-break {
  word-break: normal;
}
</style>
