<template>
  <v-sheet id="home">
    <profile :intro="about" title="About Me" background="dark-abstract.png" />
    <profile :list="skillset" title="Skills" background="blue-tech.jpg" />
    <profile
      :list="industries"
      title="Industry Experience"
      background="blue-tech.jpg"
    />
    <profile :list="hobbies" title="Hobbies" background="blue-tech.jpg" />
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
      about:
        'Tim Krofecheck is a seasoned Web Developer with 16 years professional experience currently living in Queens, NY and working at WebMD as Senior Web Developer. Prior to WebMD, Tim worked at Time Inc as an HTML5 developer creating webview storefronts on the iPad, iPhone and Kindle Fire. Tim has also upheld several development roles at the New York Post and Acxiom Digital. While working full-time, Tim has worked as a Freelancer and Contractor to build professional relationships and enhance his skill-set.',
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
