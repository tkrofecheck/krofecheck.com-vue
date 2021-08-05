<template>
  <div>
    <vue-recaptcha
      v-if="invisible"
      ref="invisibleRecaptcha"
      @verify="onVerify"
      @expired="onExpired"
      size="invisible"
      :sitekey="sitekey"
    >
    </vue-recaptcha>
    <vue-recaptcha
      v-else
      ref="invisibleRecaptcha"
      @verify="onVerify"
      @expired="onExpired"
      :sitekey="sitekey"
    >
    </vue-recaptcha>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: 'ReCaptcha',
  components: {
    'vue-recaptcha': VueRecaptcha,
  },
  props: {
    sitekey: {
      type: String,
      default: '',
    },
    invisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onSubmit: function () {
      this.$refs.invisibleRecaptcha.execute();
    },
    onVerify: function (response) {
      console.log('Verify: ' + response);
      this.$emit('onVerified', response);
    },
    onExpired: function () {
      console.log('Expired');
    },
    resetRecaptcha() {
      this.$refs.recaptcha.reset(); // Direct call reset method
    },
  },
};
</script>
