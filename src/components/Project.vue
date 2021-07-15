<template>
  <v-card id="project">
    <v-parallax height="200" src="../assets/bg-new.jpg"></v-parallax>
    <h1>{{ msg }}</h1>
  </v-card>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {
    msg: String,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
