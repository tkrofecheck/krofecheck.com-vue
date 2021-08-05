<template>
  <v-card class="mx-auto px-4 py-4" tile>
    <v-card-title class="no-overflow-x pl-0 pr-0">
      <span>I love to network with new people, so feel free to reach out!</span>
    </v-card-title>
    <v-card-text class="no-overflow-x pl-0 pr-0">
      <iframe
        src="./contact.html"
        allowtransparency="true"
        allowfullscreen="true"
        allow="geolocation; microphone; camera"
        frameborder="0"
        scrolling="no"
        @load="fadeIn($event)"
      ></iframe>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ContactForm',
  methods: {
    fadeIn(event) {
      event.currentTarget.classList.add('visible');
    },
  },
};
</script>

<style lang="scss" scoped>
iframe {
  min-width: 100%;
  height: 539px;
  border: none;
  transition: opacity 0.5s linear;
  opacity: 0;
  &.visible {
    opacity: 1;
  }
}

.footer {
  font-size: 0.75rem;
}
</style>
