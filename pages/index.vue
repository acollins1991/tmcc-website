<template>
<div>
  <Banner/>
  <CaseStudies/>
</div>
</template>

<script>
import Banner from '../components/Homepage/Banner'
import CaseStudies from '../components/Homepage/CaseStudies'

export default {
  layout: 'homepage',
  components: {
    Banner,
    CaseStudies
  }
}
</script>

<style>
</style>
