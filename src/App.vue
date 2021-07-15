<template>
  <v-app id="inspire">
    <div id="app">
      <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" app>
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
          <v-list-item
            v-for="item in items"
            :key="item.title"
            @click="$router({ path: item.route })"
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
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city', route: '/' },
        { title: 'Portfolio', icon: 'mdi-view-dashboard', route: '/portfolio' },
      ],
      social: [
        { title: 'LinkedIn', icon: 'mdi-linkedin' },
        { title: 'Github', icon: 'mdi-github' },
      ],
      mini: true,
    };
  },
};
</script>

<style lang="scss"></style>
