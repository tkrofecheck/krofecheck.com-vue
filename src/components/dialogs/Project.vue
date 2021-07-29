<template>
  <div :class="classNames">
    {{ name }}
    <v-btn
      v-if="imageFolder !== ''"
      color="primary"
      class="ma-2"
      dark
      title="View"
      @click.prevent="
        openDialog($event, true, company, name, note, url, images, imageFolder)
      "
    >
      <span class="d-flex align-center justify-space-between">
        View <v-icon>mdi-eye-outline</v-icon>
      </span>
    </v-btn>
  </div>
</template>

<script>
import { bus } from '../../bus';

export default {
  name: 'Project',
  props: {
    display: {
      type: Boolean,
      default: false,
    },
    company: {
      String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    note: {
      type: String,
      default: '',
    },
    imageFolder: {
      type: String,
      default: '',
    },
    images: {
      type: Array,
      default: () => [],
    },
    url: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      classNames: {
        'd-flex': this.display,
        'align-center': true,
        'justify-space-between': true,
        hide: !this.display,
      },
    };
  },
  methods: {
    openDialog(event, value, company, name, note, url, images, imageFolder) {
      bus.$emit(
        'project-dialog',
        value,
        company,
        name,
        note,
        url,
        images,
        imageFolder,
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
