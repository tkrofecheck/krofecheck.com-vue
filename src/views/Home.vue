<template>
  <v-sheet id="home">
    <profile />
  </v-sheet>
</template>

<script>
import Profile from '@/components/Profile';

export default {
  name: 'Home',

  components: {
    Profile,
  },
};
</script>
