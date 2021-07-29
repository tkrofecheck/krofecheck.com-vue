<template>
  <v-dialog v-model="dialog" transition="fade-transition" scrollable>
    <contact-form @cancelMessage="closeContactForm"></contact-form>
  </v-dialog>
</template>

<script>
import { bus } from '../../bus';

// This component is explicitly for the App Drawer Navigation - 'Contact Me'
export default {
  name: 'ContactDialog',
  data() {
    return {
      dialog: false,
    };
  },
  created() {
    const vm = this;
    bus.$on('contact-dialog', function (value) {
      console.log('open contact dialog', value);
      vm.dialog = value;
    });
  },
  methods: {
    closeContactForm() {
      this.dialog = false;
    },
  },
};
</script>
