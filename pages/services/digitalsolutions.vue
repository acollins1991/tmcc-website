<template>
<div>
 <Banner>
   Public Relations in a connected world
 </Banner>

 <div class="uk-container">

   <Service>
     <template slot="description">
       <h2>Media Relations</h2>
       <p class="uk-text-lead">It's not what you know....</p>
       <p>Building strong media relationships is essential to PR. Understand the interests of journalists makes selling a story that much easier.</p>
       <p>The Marketing Campaign Company has excellent contacts across a range of industry media. Allowing us to successfully raise our clients’ brand awareness in their markets.</p>
     </template>
     <template slot="image">
       <img class="tmcc-service__image" src="https://source.unsplash.com/hpjSkU2UYSU/800x800">
     </template>
   </Service>

   <Service>
     <template slot="description">
       <h2>Calm counsel at a tricky time</h2>
       <p class="uk-text-lead">It's not what you know....</p>
       <p>PR comes into its own when there’s a crisis. A pre-formulated crisis management plan is the first step. A successful outcome relies on the crisis team understanding the situation. And honesty is paramount.</p>
       <p>We know how to help clients handle a crisis. Our team can guide a client through the process with solid counsel and advice.</p>
     </template>
     <template slot="image">
       <img class="tmcc-service__image" src="https://source.unsplash.com/hpjSkU2UYSU/800x800">
     </template>
   </Service>

   <Service>
     <template slot="description">
       <h2>Content Production/Copywriting</h2>
       <p class="uk-text-lead">Crafting words to engage your audience</p>
       <p>Content is essential in today’s digital world. Entertain, inform or educate. Be compelling and imaginative. That’s the key to great content.</p>
       <p>The Marketing Campaign Company creates high-quality content for press releases, websites, white papers, blogs and articles.</p>
     </template>
     <template slot="image">
       <img class="tmcc-service__image" src="https://source.unsplash.com/hpjSkU2UYSU/800x800">
     </template>
   </Service>

   <Service>
     <template slot="description">
       <h2>Market Research</h2>
       <p class="uk-text-lead">Get the most out of your story</p>
       <p>Research can form the backbone of promotional campaigns. Robust data gives weight and adds interest to a story. Findings can create extra material – such as white papers – that add weight to a news story or comment.</p>
       <p>At Marketing Campaign Company we conduct, and commission, external research for our public relations clients. Our expertise means well-crafted questions and interesting result that support campaigns.</p>
     </template>
     <template slot="image">
       <img class="tmcc-service__image" src="https://source.unsplash.com/hpjSkU2UYSU/800x800">
     </template>
   </Service>

   <Service>
     <template slot="description">
       <h2>International PR</h2>
       <p class="uk-text-lead">Global communications at your finger tips</p>
       <p>Companies with several global locations face PR budget and co-ordination challenges. How do you build regional brand awareness without hiring a global PR firm or several local firms?</p>
       <p>Our strong financial media connections across the Middle East and Asia mean we can raise awareness for health and general insurance clients in these regions.</p>
     </template>
     <template slot="image">
       <img class="tmcc-service__image" src="https://source.unsplash.com/hpjSkU2UYSU/800x800">
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
