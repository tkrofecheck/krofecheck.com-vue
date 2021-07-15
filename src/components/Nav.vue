<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="../assets/mugshot.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>Tim Krofecheck</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city', link: '/' },
        { title: 'Portfolio', icon: 'mdi-view-dashboard', link: '/portfolio' },
        { title: 'LinkedIn', icon: 'mdi-linkedin' },
        { title: 'Github', icon: 'mdi-github' },
      ],
      mini: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
