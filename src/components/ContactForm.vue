<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form v-if="!messageSent" @submit.prevent="submit">
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
      <validation-provider v-slot="{ errors }" name="select" rules="required">
        <v-select
          v-model="select"
          :items="items"
          :error-messages="errors"
          label="Topic"
          data-vv-name="select"
          required
        ></v-select>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="message" rules="required">
        <v-textarea
          v-model="message"
          :error-messages="errors"
          label="Message"
          required
        ></v-textarea>
      </validation-provider>

      <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
    <div v-else>
      <span>Message sent successfully!</span
      ><v-btn secondary @click="newMessage($event)">Send New Message</v-btn>
    </div>
  </validation-observer>
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
      items: ['General', 'Freelancing', 'Other'],
      message: '',
      messageSent: false,
    };
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

      fetch('https://mailthis.to/TimKrofecheck', {
        method: 'POST',
        body: formData,
      }).then((resData) => {
        console.log('form submit response', resData);
        this.messageSent = true;
        window.location.href = 'https://mailthis.to/confirm';
      });
    },
    clear() {
      this.name = '';
      this.email = '';
      this.message = '';
      this.messageSent = false;
      this.select = null;
      this.$refs.observer.reset();
    },
    newMessage(event) {
      if (event) {
        event.preventDefault();
      }

      this.clear();
      this.messageSent = false;
    },
  },
};
</script>
