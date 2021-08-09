<template>
  <div>
    <vue-recaptcha
      v-if="!visible"
      ref="recaptcha"
      @verify="onVerify"
      @expired="onExpired"
      size="invisible"
      :sitekey="sitekey"
      :loadRecaptchaScript="true"
    >
    </vue-recaptcha>
    <vue-recaptcha
      v-else
      ref="recaptcha"
      @verify="onVerify"
      @expired="onExpired"
      :sitekey="sitekey"
      :loadRecaptchaScript="true"
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
    clear: {
      type: Boolean,
      default: false,
    },
    sitekey: {
      type: String,
      default: '',
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onSubmit: function () {
      this.$refs.recaptcha.execute();
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
  watch: {
    clear(newVal) {
      if (newVal) {
        this.resetRecaptcha();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
