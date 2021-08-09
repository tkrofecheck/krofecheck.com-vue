<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        right
        app
        class="drawer__bg"
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="./assets/mugshot.jpg"
              alt="Tim Krofecheck"
              title="Tim Krofecheck"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-title class="drawer__content"
            >Tim Krofecheck</v-list-item-title
          >

          <v-btn icon @click.stop="mini = !mini">
            <v-icon class="drawer__content" title="Close Menu"
              >mdi-chevron-right</v-icon
            >
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="route in routes"
            :key="route.title"
            :to="route.path"
            @click.prevent="keepCollapsed($event)"
          >
            <v-list-item-icon>
              <v-icon class="drawer__content" :title="route.title">{{
                route.icon
              }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="drawer__content">{{
                route.title
              }}</v-list-item-title>
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
              <v-icon class="drawer__content" :title="item.title">{{
                item.icon
              }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="drawer__content">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <div class="site__info">
          <div v-html="copyright" class="drawer__content--small"></div>
          <div v-html="buildInfo" class="drawer__content--small"></div>
        </div>
      </v-navigation-drawer>

      <!-- Sizes your content based upon application components -->
      <v-main id="main">
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import globals from './globals';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      buildInfo: `v${process.env.VUE_APP_VERSION}`,
      copyright: `&copy;${new Date().getFullYear()}`,
      drawer: true,
      expYears: 16,
      routes: [
        { title: 'Home', icon: 'mdi-home-city', path: '/' },
        { title: 'Portfolio', icon: 'mdi-view-dashboard', path: '/portfolio' },
        {
          title: 'Contact',
          icon: 'mdi-at',
          path: '/contact',
        },
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
  mounted() {
    console.log('globals', globals);
  },
  methods: {
    keepCollapsed(event) {
      event.stopPropagation(); // do not open app nav drawer
    },
    goTo(item, event) {
      if (event) {
        event.preventDefault();
      }

      window.open(item.path);
    },
  },
};
</script>

<style lang="scss">
.close__btn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px 0px 0px;
}

.drawer__bg {
  background-color: $drawerLightBlue !important;
}

.drawer__content {
  color: $drawerBlue !important;

  a {
    color: inherit !important;
  }
}

.hide {
  display: none;
}

.no-overflow-x {
  overflow-x: hidden;
}

.no-wordbreak {
  word-break: normal;
}

.site__info {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px;
  width: 100%;
  text-align: right;
}

.drawer__content--small {
  font-size: 0.75rem;
}

.project-dialog {
  // selector lives here because content-class used on v-dialog is not scoped
  box-shadow: none !important;
}
</style>
