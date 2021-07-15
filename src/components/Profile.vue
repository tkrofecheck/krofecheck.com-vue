<template>
  <v-card id="profile">
    <v-parallax src="../assets/bg.jpg"></v-parallax>
    <div>{{ company }}</div>
    <div>{{ hobbies }}</div>
    <div>{{ skillset }}</div>
    <div>{{ industries }}</div>
  </v-card>
</template>

<script>
import { formatArray } from '@/utils/index';

export default {
  name: 'Profile',
  props: {},
  data() {
    return {
      company: 'WebMD / Medscape Professional',
      hobbies: formatArray([
        'broadway',
        'tv/movies',
        'restaurants',
        'wine tasting',
        'video games',
      ]),
      industries: formatArray([
        'education',
        'email marketing',
        'news/media',
        'industrial products',
        'health/news industries',
      ]),
      skillset: [
        'Vue/Vuex',
        'React',
        'GraphQL',
        'Apollo',
        'Webpack',
        'Grunt',
        'Gulp',
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
