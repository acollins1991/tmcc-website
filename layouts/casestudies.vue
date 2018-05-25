<template>
  <div>
    <nuxt/>
    <SiteFooter/>
    <OffCanvasMenu/>
  </div>
</template>

<script>
import SiteFooter from '../components/Global/Footer'
import OffCanvasMenu from '../components/Global/OffCanvasMenu'

export default {
  components: {
    SiteFooter,
    OffCanvasMenu
  }
}
</script>

<style>
</style>
