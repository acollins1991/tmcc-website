<template>
  <div>
    <SiteNavbar/>
    <nuxt/>
    <HomepageFooter/>
  </div>
</template>

<script>
import SiteNavbar from '../components/Global/Navbar'
import HomepageFooter from '../components/Homepage/Footer'

export default {
  components: {
    SiteNavbar,
    HomepageFooter
  }
}
</script>

<style>
</style>
