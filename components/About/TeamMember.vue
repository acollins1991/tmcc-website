<template>
<div class="uk-box-shadow-medium uk-transition-toggle ">
  <div class="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default">
      <h2 class="uk-h4 uk-text-center">
        <slot name="name"></slot>
      </h2>
      <p class="uk-text-center">
        <slot name="position"></slot>
      </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'TeamMember'
}
</script>

<style>
</style>
