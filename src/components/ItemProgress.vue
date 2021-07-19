<template>
  <v-card v-intersect="onIntersect">
    <span>{{ item.name }}</span>
    <v-progress-linear
      v-model="intersectingProgress"
      :color="color"
      height="25"
      :indeterminate="isIntersecting"
    >
      <span class="progress__label">{{ item.years }} yr.</span>
    </v-progress-linear>
  </v-card>
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
  data() {
    return {
      intersectingProgress: 100,
      isIntersecting: true,
    };
  },
  created() {
    console.log('progress', this);
  },
  methods: {
    onIntersect(entries) {
      setTimeout(() => {
        this.isIntersecting = !entries[0].isIntersecting;
        this.intersectingProgress = entries[0].isIntersecting
          ? this.progress
          : 100;
      }, 1000);
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
