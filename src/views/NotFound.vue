<template>
  <center>
    <parallax :title="title" :intro="true"></parallax>
    <h3>
      Sorry you couldn't find what you were looking for.
      <router-link to="/">GO TO HOMEPAGE</router-link>
    </h3>
  </center>
</template>

<script>
import Parallax from '../components/Parallax.vue';

export default {
  name: 'NotFoundComponent',
  components: {
    Parallax,
  },
  data() {
    return {
      title: 'Page Not Found - 404',
      info: 'Sorry you couldn\'t find what you were looking for. <a to="/">GO TO HOMEPAGE</a>',
    };
  },
};
</script>

<style scoped></style>
