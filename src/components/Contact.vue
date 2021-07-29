<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-card class="mx-auto my-4" tile flat elevation="5">
        <parallax
          :title="title"
          :info="info"
          :background="background"
        ></parallax>
        <v-card-text align="right">
          <v-btn
            color="primary"
            class="ma-2"
            light
            title="Send a Message"
            @click.prevent="contactMe($event, true)"
          >
            <span class="d-flex align-center justify-space-between">
              Send a Message <v-icon>mdi-arrow-right</v-icon>
            </span>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { bus } from '../bus';
import Parallax from './Parallax.vue';

export default {
  name: 'Contact',
  components: {
    Parallax,
  },
  props: {
    background: {
      type: String,
      default: '',
    },
    info: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    contactMe(event, value) {
      bus.$emit('contact-dialog', value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
