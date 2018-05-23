<template>
<div class="uk-offcanvas-content">
  <SiteNavbar/>
  <nuxt/>
  <HomepageFooter/>
  <OffCanvasMenu/>
</div>
</template>

<script>
import SiteNavbar from '../components/Global/Navbar'
import HomepageFooter from '../components/Homepage/Footer'
import OffCanvasMenu from '../components/Global/OffCanvasMenu'

export default {
  components: {
    SiteNavbar,
    HomepageFooter,
    OffCanvasMenu
  }
}
</script>

<style>
</style>
