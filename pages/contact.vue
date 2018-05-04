<template>
  <div class="uk-container uk-container-large">
    <Banner/>
    <div class="uk-flex uk-flex-between" uk-grid>
      <div class="uk-child-1-2">
        <Form/>
      </div>
      <div class="uk-child-1-4">
        <p>We're always happy to meet new people and turn their business into a success.</p>
        <p>So let's grab a coffee and talk.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Contact/Banner'
import Form from '../components/Contact/Form'

export default {
  components: {
    Banner,
    Form
  }
}
</script>

<style>
</style>
