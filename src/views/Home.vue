<template>
  <v-sheet id="home">
    <v-row dense>
      <v-col cols="12">
        <intro
          :info="`Hi, my name is Tim Krofecheck! I am a seasoned Web Developer with ${skillset.max} years professional experience. I live in Queens, NY and work at WebMD as Team Lead of Development. Currently, my favorite tech to work with is Vue.js. Prior to WebMD, I worked at Thomas as a UI Engineer helping rebrand the company website. I've also spent time at Time Inc. as an HTML5 developer creating webview storefronts on the iPad, iPhone and Kindle Fire. I've also upheld several development roles at the New York Post, Acxiom Digital and Colgate University. During my free time, I enjoy Freelancing and networking with others, so feel free to send me a message!`"
          title="Who is he?"
        ></intro>
      </v-col>
      <v-col cols="12">
        <experience
          :list="experience"
          title="Where has he been?"
          info="After completing my Bachelor of Technology (Web Development) degree at SUNY Morrisville, I've had the opportunity to work and live in various places throughout New York State."
        ></experience>
        <skillset
          :max="skillset.max"
          :list="skillset.list"
          :progress="true"
          title="What can he do?"
          :info="` With years of experience throughout my career of ${skillset.max} years, I've obtained a strong set of skills.`"
        ></skillset>
        <hobby
          :list="hobbies"
          title="Why not do other things too?"
          info="In my spare time I have several interests and hobbies."
        ></hobby>
        <contact
          :contact="true"
          title="How do you contact me?"
          info="I love to network with new people, so feel free to reach out!"
        ></contact>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import Intro from '../components/Intro.vue';
import Experience from '../components/Experience.vue';
import Skillset from '../components/Skillset.vue';
import Hobby from '../components/Hobby.vue';

export default {
  name: 'Home',

  components: {
    Intro,
    Experience,
    Skillset,
    Hobby,
  },

  data() {
    return {
      company: 'WebMD / Medscape Professional',
      hobbies: [
        'Broadway Shows',
        'TV & Movies',
        'Eating Out',
        'Wine Tasting',
        'Video Games',
        'Web Development',
      ],
      experience: [
        {
          city: 'New York, NY',
          companies: [
            {
              company: 'WebMD (Medscape)',
              position: 'Sr. Web Applications Developer / Team Lead',
              industry: 'Health Media & Services',
              year: 'Aug 2018 - Present',
            },
            {
              company: 'Thomas',
              position: 'UI Engineer',
              industry: 'Industrial Products',
              year: 'Nov 2017 - Jul 2018',
            },
            {
              company: 'WebMD',
              position: 'Sr. Web Developer / Tech Lead',
              industry: 'Health Media & Services',
              year: 'May 2015 - Oct 2017',
            },
            {
              company: 'Time Inc.',
              position: 'HTML Developer / Contract Developer',
              industry: 'Digital Publishing & Media',
              year: 'Jul 2012 - Aug 2015',
            },
            {
              company: 'New York Post',
              position: 'Web Developer',
              industry: 'Publishing & Broadcasting',
              year: 'Aug 2010 - Jul 2012',
            },
            {
              company: 'Acxiom Digital',
              position: 'Content Specialist / Solutions Developer',
              industry: 'Email Advertising & Marketing',
              year: 'Dec 2005 - Jul 2010',
            },
          ],
        },
        {
          city: 'Albany, NY',
          companies: [
            {
              company: 'Linium LLC',
              position: 'Service Desk Support Professional',
              industry: 'Software & Technology Services',
              year: 'Sep 2004 - Aug 2005',
            },
          ],
        },
        {
          city: 'Hamilton, NY',
          companies: [
            {
              company: 'Colgate University',
              position: 'Desktop Support Intern',
              industry: 'Higher Education',
              year: 'Jan 2004 - May 2004',
            },
          ],
        },
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
          { name: 'Grunt', years: 5 },
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

<style lang="scss" scoped>
#home {
  background: inherit;
}
</style>
