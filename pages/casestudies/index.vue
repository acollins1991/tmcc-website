<template>
<div>
  <div class="uk-background-cover uk-background-center-center uk-background-norepeat tmcc-casestudypage__banner" style="background-image:url(https://source.unsplash.com/MWP9cxS4uCg/1600x900);">
    <SiteNavbar/>
    <div class="uk-container uk-text-center uk-margin-xlarge-top uk-margin-large-bottom">
      <h1 class="uk-heading-primary">30 Euston Square</h1>
    </div>
  </div>
  <div class="uk-section-large uk-container">
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <h2>About 30 Euston Square</h2>
        <p>30 Euston Square is a building located at the corner of Euston Road and Melton Street, London NW1. Originally build as the headwuarters of an assurance company, it has since been converted to form the headquarters o the Royal College of General Practitioners.It's archtectural style is Greek Revival.</p>
      </div>
      <div class="uk-text-right">
        <h2>What We Do</h2>
        <ul class="uk-list">
          <li>Web Design</li>
          <li>PPC</li>
          <li>SEO</li>
          <li>Content Marketing</li>
        </ul>
      </div>
    </div>
  </div>
  <img src="http://via.placeholder.com/2000x750" alt="">
  <div class="uk-section-large uk-container uk-container-small uk-text-center">
    <h2>Our Process</h2>
    <hr>
    <p>We identified the brand of 30 Euston Square Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</div>
</template>

<script>
import SiteNavbar from '../../components/Global/Navbar'

export default {
  layout: 'casestudies',
  components: {
    SiteNavbar
  }
}
</script>

<style lang="scss" scoped>
.tmcc-casestudypage__banner {
  height:600px;
}
</style>
