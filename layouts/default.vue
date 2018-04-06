<template>
  <div>
    <SiteNavbar/>
    <nuxt/>
    <SiteFooter/>
  </div>
</template>

<script>
import SiteNavbar from '../components/Global/Navbar'
import SiteFooter from '../components/Global/Footer'

export default {
  components: {
    SiteNavbar,
    SiteFooter
  }
}
</script>

<style>
</style>
