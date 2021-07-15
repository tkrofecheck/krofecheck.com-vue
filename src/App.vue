<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        right
        app
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="./assets/mugshot.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>Tim Krofecheck</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" :to="item.route">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in social"
            :key="item.title"
            @click="goTo(item, $event)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer elevation="10" inset app>
        <div class="text-center d-flex align-center justify-space-around">
          <span v-html="copyright"></span>
          <v-tooltip bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Info
              </v-btn>
            </template>
            <span>Site built using Vue.js (vue, vuex, vuetify)</span>
          </v-tooltip>
        </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      copyright: `&copy;${new Date().getFullYear()} - krofecheck.com`,
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city', route: '/' },
        { title: 'Portfolio', icon: 'mdi-view-dashboard', route: '/portfolio' },
      ],
      social: [
        {
          title: 'LinkedIn',
          icon: 'mdi-linkedin',
          path: 'https://www.linkedin.com/in/tkrofecheck/',
        },
        {
          title: 'Github',
          icon: 'mdi-github',
          path: 'https://github.com/tkrofecheck',
        },
      ],
      mini: true,
    };
  },
  methods: {
    goTo(item, event) {
      if (event) {
        event.preventDefault();
      }

      window.open(item.path);
    },
  },
};
</script>

<style lang="scss"></style>
