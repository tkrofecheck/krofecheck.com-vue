<template>
  <div>
    <span>{{ item.name }}</span>
    <v-progress-linear v-model="progress" :color="color" height="25">
      <span class="progress__label">{{ item.years }} yr.</span>
    </v-progress-linear>
  </div>
</template>

<script>
export default {
  name: 'ItemProgress',
  props: {
    color: {
      type: String,
      default: '',
    },
    item: {
      type: Object,
      default: () => {},
    },
    progress: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.progress__label {
  color: white;
  text-shadow: 1px 1px black;
}
</style>
