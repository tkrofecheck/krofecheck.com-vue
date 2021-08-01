<template>
  <v-carousel hide-delimiters eager show-arrows-on-hover height="80vh">
    <v-carousel-item
      v-for="(image, index) in images"
      :key="`${image}-${index}`"
    >
      <v-img
        :src="getImage(image.name)"
        contain
        height="80vh"
        position="center center"
      ></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'ProjectGallery',
  props: {
    imageFolder: {
      type: String,
      default: '',
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    // this.fixLayout();
  },
  methods: {
    // fixLayout() {
    //   const carouselItem = this.$el.querySelector(
    //     '.v-image.v-responsive.v-carousel__item',
    //   );

    //   if (typeof carouselItem === 'undefined') {
    //     window.requestAnimationFrame(this.fixLayout);
    //     return false;
    //   } else {
    //     window.cancelAnimationFrame(this.fixLayout);
    //     carouselItem.addClass('align-center');
    //   }
    // },
    getImage(img) {
      return require(`../../assets/portfolio/${this.imageFolder}/${img}`);
    },
  },
};
</script>

<style lang="scss" scoped>
// .carousel__bg {
//   background-color: rgba(0, 0, 0, 0.8);
// }

// .v-window-item {
//   @include respond-below(tablet) {
//     .v-image.v-responsive.v-carousel__item {
//       align-items: center;
//     }
//   }
// }

// .carousel {
//   position: relative;
//   width: 100%;
//   height: 100%;
// }
</style>
