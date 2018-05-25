<template>
<div>
  <div class="uk-container">
    <h2 class="uk-h1 uk-margin-large-bottom">Some incredible people we work with</h2>
  </div>
  <div class="uk-container uk-container-small uk-margin-large-bottom">
    <div class="uk-child-width-1-4@l uk-child-width-1-3@s uk-child-width-1-2 uk-flex uk-flex-middle" uk-grid>
      <template v-for="(client, index) in clients">
        <div v-bind:key="index">
          <img v-bind:src="client.image" v-bind:alt="client.name">
        </div>
      </template>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Clients',
  data() {
    return {
      clients: [{
          name: '30 Euston Square',
          image: 'http://via.placeholder.com/350x250'
        }, {
          name: '30 Euston Square',
          image: 'http://via.placeholder.com/350x250'
        },
        {
          name: '30 Euston Square',
          image: 'http://via.placeholder.com/350x250'
        },
        {
          name: '30 Euston Square',
          image: 'http://via.placeholder.com/350x250'
        },
        {
          name: '30 Euston Square',
          image: 'http://via.placeholder.com/350x250'
        },
        {
          name: '30 Euston Square',
          image: 'http://via.placeholder.com/350x150'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
