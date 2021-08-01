<template>
  <v-card class="mx-auto px-4 py-4" tile>
    <v-card-title class="no-overflow-x pl-0 pr-0">
      <span>I love to network with new people, so feel free to reach out!</span>
    </v-card-title>
    <v-card-text class="no-overflow-x pl-0 pr-0">
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
          <validation-provider
            v-slot="{ errors }"
            name="Name"
            rules="required|max:20"
          >
            <v-text-field
              v-model="name"
              :counter="20"
              :error-messages="errors"
              label="Name"
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
              label="Topic"
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

          <v-card-actions>
            <v-btn class="primary mr-4" type="submit" :disabled="invalid">
              submit
            </v-btn>
            <v-btn @click="clear"> clear </v-btn>
          </v-card-actions>
        </form>
      </validation-observer>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-subtitle class="pb-0 pl-0 pr-0">
      <v-footer class="footer inline-block no-wordbreak mt-4">
        Upon clicking 'Submit', you will be redirected to a third-party
        site.</v-footer
      >
    </v-card-subtitle>
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
import jsonToFormData from '@/utils/jsonToFormData';

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
  },
  data() {
    return {
      name: '',
      email: '',
      select: null,
      items: ['General', 'Freelancing', 'Recruiter'],
      message: '',
      formSubmitUrl: '',
      formConfirmUrl: '',
    };
  },
  mounted() {
    this.formSubmitUrl = 'https://mailthis.to/TimKrofecheck';
    this.formConfirmUrl = 'https://mailthis.to/confirm';
  },
  methods: {
    submit() {
      if (!this.$refs.observer.validate()) {
        return false;
      }

      const formData = jsonToFormData({
        name: this.name,
        email: this.email,
        _replyto: this.email,
        _subject: `[${this.select}] from krofecheck.com`,
        _after: window.location.href,
        message: this.message,
      });

      console.log('form_data', formData);

      fetch(this.formSubmitUrl, {
        method: 'POST',
        body: formData,
      }).then((resData) => {
        console.log('form submit response', resData);
        window.location.href = this.formConfirmUrl;
      });
    },
    clear() {
      this.name = '';
      this.email = '';
      this.message = '';
      this.select = null;
      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  font-size: 0.75rem;
}
</style>
