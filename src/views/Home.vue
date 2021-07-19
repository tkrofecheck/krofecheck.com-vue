<template>
  <v-sheet id="home">
    <v-row dense>
      <v-col cols="12">
        <profile
          :intro="`Tim Krofecheck is a seasoned Web Developer with ${skillset.max} years professional experience currently living in Queens, NY and working at WebMD as Senior Web Developer. Prior to WebMD, Tim worked at Time Inc as an HTML5 developer creating webview storefronts on the iPad, iPhone and Kindle Fire. Tim has also upheld several development roles at the New York Post and Acxiom Digital. While working full-time, Tim has worked as a Freelancer and Contractor to build professional relationships and enhance his skill-set.`"
          title="Who is he?"
          background="dark-abstract.png"
        ></profile>
      </v-col>
      <v-col cols="12">
        <profile
          :max="skillset.max"
          :list="skillset.list"
          :divided="true"
          :progress="true"
          title="What can he do?"
          background="blue-tech.jpg"
        ></profile>
        <profile
          :list="industries"
          title="Where has he been?"
          background="blue-tech.jpg"
        ></profile>
        <profile
          :list="hobbies"
          title="Why not enjoy this?"
          background="blue-tech.jpg"
        ></profile>
        <profile
          :contact="true"
          title="How do you contact me?"
          background="blue-tech.jpg"
        ></profile
      ></v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import Profile from '@/components/Profile';

export default {
  name: 'Home',

  components: {
    Profile,
  },

  data() {
    return {
      company: 'WebMD / Medscape Professional',
      hobbies: [
        'broadway',
        'tv/movies',
        'restaurants',
        'wine tasting',
        'video games',
        'web development',
      ],
      industries: [
        'education',
        'email marketing',
        'news/media',
        'industrial products',
        'health/news',
      ],
      skillset: {
        max: 16,
        list: [
          { name: 'HTML', years: 16 },
          { name: 'CSS', years: 16 },
          { name: 'JavaScript', years: 16 },
          { name: 'Git', years: 8 },
          { name: 'SCSS', years: 8 },
          { name: 'jQuery', years: 8 },
          { name: 'Agile', years: 7 },
          { name: 'Node.js', years: 7 },
          { name: 'Webpack', years: 6 },
          { name: 'Handlebars', years: 3 },
          { name: 'Vue/Vuex', years: 2 },
          { name: 'React', years: 2 },
          { name: 'Backbone', years: 2 },
          { name: 'Bootstrap 4', years: 1 },
          { name: 'Vuetify', years: 1 },
          { name: 'GraphQL', years: 1 },
          { name: 'Apollo Client', years: 1 },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
