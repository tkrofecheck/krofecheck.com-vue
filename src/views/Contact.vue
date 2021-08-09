<template>
  <v-card class="mx-auto px-4 py-4" tile>
    <v-card-title class="no-overflow-x pl-0 pr-0">
      <span>I love to network with new people, so feel free to reach out!</span>
    </v-card-title>
    <v-card-text class="no-overflow-x pl-0 pr-0">
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="onSubmit">
          <validation-provider
            v-slot="{ errors }"
            name="Name"
            rules="required|max:40"
          >
            <v-text-field
              v-model="name"
              :counter="20"
              :error-messages="errors"
              label="Full Name"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors"
              label="E-mail"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="select"
            rules="required"
          >
            <v-select
              v-model="select"
              :items="items"
              :error-messages="errors"
              label="Subject"
              data-vv-name="select"
              required
            ></v-select>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="message"
            rules="required"
          >
            <v-textarea
              v-model="message"
              :error-messages="errors"
              label="Message"
              required
            ></v-textarea>
          </validation-provider>

          <v-card-actions class="d-block">
            <div class="mb-4">
              <validation-provider
                v-slot="{ errors }"
                name="recaptcha"
                rules="required"
              >
                <recaptcha
                  v-model="recaptcha"
                  :clear="clearRecaptcha"
                  :sitekey="sitekey"
                  :error-messages="errors"
                  @onVerified="onRecaptchaVerified"
                ></recaptcha>
              </validation-provider>
            </div>

            <div class="mb-4">
              <v-btn class="primary mr-4" type="submit" :disabled="invalid">
                submit
              </v-btn>

              <v-btn @click="clear"> clear </v-btn>
            </div>

            <div>
              <p id="my-form-status" v-html="statusMessage"></p>
            </div>
          </v-card-actions>
        </form>
      </validation-observer>
    </v-card-text>
    <v-divider></v-divider>
    <!-- <v-card-subtitle class="pb-0 pl-0 pr-0">
      <v-footer class="footer inline-block no-wordbreak mt-4">
        Upon clicking 'Submit', you will be redirected to a third-party
        site.</v-footer
      >
    </v-card-subtitle> -->
  </v-card>
</template>

<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules';
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate';
import ReCaptcha from '../components/ReCaptcha.vue';

setInteractionMode('eager');

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
});

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
});

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
});

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
});

extend('email', {
  ...email,
  message: 'Email must be valid',
});

export default {
  name: 'ContactForm',
  components: {
    ValidationProvider,
    ValidationObserver,
    recaptcha: ReCaptcha,
  },
  data() {
    return {
      name: '',
      email: '',
      select: null,
      items: ['General', 'Freelancing', 'Recruiter'],
      message: '',
      formSubmitUrl: '',
      recaptcha: '',
      statusMessage: '',
      sitekey: process.env.VUE_APP_RECAPTCHA_SITEKEY,
      clearRecaptcha: false,
    };
  },
  mounted() {
    this.formSubmitUrl = process.env.VUE_APP_CONTACT_FORM_URL;
  },
  methods: {
    onSubmit() {
      if (!this.$refs.observer.validate()) {
        return false;
      }

      const formData = {
        name: this.name,
        _replyto: this.email,
        _subject: `[${this.select}] message from krofecheck.com`,
        message: this.message,
        'g-recaptcha-response': this.recaptcha,
      };

      console.log('form_data', formData);

      fetch(this.formSubmitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(formData),
      }).then((resData) => {
        console.log('form submit response', resData);
        if (resData.status === 200) {
          this.statusMessage = 'Thanks for your submission!';
          this.$refs.observer.reset();
          this.clear();
        } else {
          this.statusMessage =
            resData.statusText ||
            'Oops! There was a problem submitting your form';
        }
      });
    },
    onRecaptchaVerified(value) {
      this.recaptcha = value;
    },
    clear() {
      this.name = '';
      this.email = '';
      this.message = '';
      this._subject = '';
      this.recaptcha = '';
      this.select = null;
      this.$refs.observer.reset();
      this.clearRecaptcha = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  font-size: 0.75rem;
}
</style>

<!--
Form Data Example
name: Tim Krofecheck
_replyto: tkrofecheck@gmail.com
message: Test
_subject: Message from krofecheck.com
g-recaptcha-response: 03AGdBq25NjwmqM9MnQ6jkNNos5R19Cdnve_dwL9QugevTd8Hw3P9K7HU0XcsDUlV948FAM5nFyYn-IviPuO5tGMbXSDlr6p57OYYQBRvHvYdJxzjn2mTXu6fTQzUMDTNT2_gAk9OHqhkxf6DsDTOrrOLAoNY01JWq7UDzbEt9_8mFSmUN5zVi5vrOrOUmcFeCTfnC6Qde2DXZ03Wi3F0F43dDXur5NqGn2b40_ZO2pS-t96SB01pOHXJV7Vw1OkxqgcgfIJ07GTwW6rFbEo2puuxPIkpN_7tnpmA6AS28eW5xAd4hVKFoIHg81_8SGH8lmN-nDkSHz_B_CF2FUCtzspFbWQRiLr63KqSBJMEo95OqHOKNFVVjBiclHya5qmHaIYrPxMAuL1Sq
-->
