<template>
  <div id="portfolio">
    <project msg="project name" />
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
