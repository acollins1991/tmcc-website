<template>
<form class="uk-grid-small" uk-grid v-on:submit.prevent="submitForm">
  <div class="uk-width-1-2">
    <input class="uk-input" type="text" placeholder="Name" v-model="name">
  </div>
  <div class="uk-width-1-2">
    <input class="uk-input" type="text" placeholder="Email Address" v-model="email">
  </div>
  <div class="uk-width-1-1">
    <textarea class="uk-textarea" rows="10" placeholder="Let's talk" v-model="message"></textarea>
  </div>
  <button type="submit" name="button">test</button>
</form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Form',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm: () => {
      const contactFormAPIBase = process.env.contactFormAPIBase
      console.log('form submitted')
      axios.post(contactFormAPIBase, {
          name: this.name,
          email: this.email,
          message: this.message
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>
