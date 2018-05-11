<template>
<div class="uk-box-shadow-medium uk-transition-toggle">
  <div class="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
    <div class="uk-text-center">
      <h2 class="uk-h4">
        <slot name="name"></slot>
      </h2>
      <p>
        <slot name="position"></slot>
      </p>
    </div>
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
