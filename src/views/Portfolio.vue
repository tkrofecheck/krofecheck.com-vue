<template>
  <div id="portfolio">
    <project
      v-for="(index, project) in projects"
      :key="index"
      :name="project.name"
      :slides="project.slides"
    />
  </div>
</template>

<script>
import Project from '@/components/Project.vue';

export default {
  name: 'Portfolio',
  components: {
    Project,
  },
  data() {
    return {
      projects: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
