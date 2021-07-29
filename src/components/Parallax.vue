<template>
  <v-parallax
    src="../assets/cloud.jpg"
    :height="`${intro ? 500 : 200}`"
    :class="`${intro ? 'intro' : 'no-intro'}`"
  >
    <v-card-title class="no-wordbreak">{{ title }}</v-card-title>
    <v-card-text>
      <span>{{ info }}</span>
    </v-card-text>
  </v-parallax>
</template>

<script>
export default {
  name: 'ParallaxBackground',
  props: {
    // background: {
    //   type: String,
    //   default: '',
    // },
    info: {
      type: String,
      default: '',
    },
    intro: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    // getImageUrl(img) {
    //   return require(`../assets/${img}`);
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.intro,
.no-intro {
  .v-card__title,
  .v-card__text {
    color: $drawerBlue;
    font-weight: 500;
    // text-shadow: 3px 1px $drawerLightBlue;
  }
}

.intro {
  @include respond-above(phablet) {
    .v-card__title {
      font-size: 2rem;
    }

    .v-card__text {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
  }
}
.no-intro {
  @include respond-above(phablet) {
    .v-card__title {
      font-size: 1.75rem;
    }

    .v-card__text {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  }
}
</style>
