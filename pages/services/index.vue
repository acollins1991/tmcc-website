<template>
<div>
 <Banner>
   Here's what we can do for you
 </Banner>

 <div class="uk-container">

   <Service>
     <template slot="description">
       <h2>Digital Marketing</h2>
       <p>A digital marketing strategy can take mayn forms, depending on business objectives. How to drive more targeted traffic. How to convert more customers online. How to build brand awareness via online channels. All issues that a strategy needs to address.</p>
       <p>We help businesses to define their objectives and develop a strategy that meets them.</p>
       <a href="/services/digitalmarketing">Read more</a>
     </template>
     <template slot="image">
       <img class="tmcc-service__image" src="https://source.unsplash.com/hpjSkU2UYSU/800x800">
     </template>
   </Service>

   <Service>
     <template slot="description">
       <h2>Digital Services</h2>
       <p>A digital marketing strategy can take mayn forms, depending on business objectives. How to drive more targeted traffic. How to convert more customers online. How to build brand awareness via online channels. All issues that a strategy needs to address.</p>
       <p>We help businesses to define their objectives and develop a strategy that meets them.</p>
       <a href="/services/digitalsolutions">Read more</a>
     </template>
     <template slot="image">
       <img class="tmcc-service__image" src="https://source.unsplash.com/nJX74kn1yn4/800x800">
     </template>
   </Service>

   <Service>
     <template slot="description">
       <h2>Public Relations</h2>
       <p>A digital marketing strategy can take mayn forms, depending on business objectives. How to drive more targeted traffic. How to convert more customers online. How to build brand awareness via online channels. All issues that a strategy needs to address.</p>
       <p>We help businesses to define their objectives and develop a strategy that meets them.</p>
       <a href="/services/publicrelations">Read more</a>
     </template>
     <template slot="image">
       <img class="tmcc-service__image" src="https://source.unsplash.com/60VrGk-bfeA/800x800">
     </template>
   </Service>

 </div>

</div>
</template>

<script>
import Banner from '../../components/Services/Banner.vue'
import Service from '../../components/Services/Service.vue'

export default {
  components: {
    Banner,
    Service
  }
}
</script>

<style>
</style>
