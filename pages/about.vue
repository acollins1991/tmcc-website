<template>
<div>
  <Banner/>
  <Team/>
  <Clients/>
</div>
</template>

<script>
import Banner from '../components/About/Banner'
import Team from '../components/About/Team'
import Clients from '../components/About/Clients'

export default {
  head () {
    return {
      title: 'About Us - The Marketing Campaign Company',
      meta: [
        { hid: 'description', name: 'description', content: 'We’re an independent full-service marketing agency with strong knowledge and experience in a diverse range of industry sectors.' }
      ]
    }
  },
  components: {
    Banner,
    Team,
    Clients
  }
}
</script>
