<template>
  <div>
    <SiteNavbar/>
    <nuxt/>
    <SiteFooter/>
    <OffCanvasMenu/>
  </div>
</template>

<script>
import SiteNavbar from '../components/Global/Navbar'
import SiteFooter from '../components/Global/Footer'
import OffCanvasMenu from '../components/Global/OffCanvasMenu'

export default {
  components: {
    SiteNavbar,
    SiteFooter,
    OffCanvasMenu
  }
}
</script>

<style>
</style>
