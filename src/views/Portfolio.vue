<template>
  <div class="portfolio">
    <v-sheet
      id="portfolio"
      height="400"
      width="200"
      class="overflow-hidden"
      style="position: fixed; background: transparent; top: 20px"
    >
      <v-parallax src="../assets/bg-new.jpg"></v-parallax>
      <project msg="project name" />
    </v-sheet>
  </div>
</template>

<script>
import Project from '@/components/Project.vue';

export default {
  name: 'Portfolio',
  components: {
    Project,
  },
};
</script>

<style lang="scss" scoped></style>
