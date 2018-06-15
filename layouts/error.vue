<template>
  <div class="uk-container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head(){
    return {
      title: 'Page Not Found - The Marketing Campaign Company',
      meta: [
        { hid: 'description', name: 'description', content: "It doesn't look like the page exists" }
      ]
    }
  }
}
</script>
