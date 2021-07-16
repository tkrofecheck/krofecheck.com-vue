<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-card class="mx-auto my-12">
        <v-parallax
          ref="Background"
          :src="getImageUrl(background)"
          :height="height"
        >
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <span v-if="intro">{{ intro }}</span>
              <span v-else>{{ formatArray(list) }}</span>
            </v-row>
          </v-card-text>
        </v-parallax>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    background: {
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
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      height: this.list.length > 0 ? '200' : '500',
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
