<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-card class="mx-auto my-12">
        <v-card-title>{{ name }}</v-card-title>
        <v-card-text>
          <v-row align="center" class="mx-0">{{ slides }}</v-row>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {
    name: {
      type: String,
      default: '',
    },
    slides: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
