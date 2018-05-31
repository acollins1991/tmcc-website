<template>
<div>
  <div class="uk-background-cover uk-background-center-center uk-background-norepeat tmcc-casestudypage__banner" style="background-image:url(http://via.placeholder.com/2000x1000);">
    <SiteNavbar/>
    <div class="uk-container uk-text-center uk-margin-xlarge-top uk-margin-large-bottom uk-light">
      <h1 class="uk-heading-primary">30 Euston Square</h1>
      <p class="uk-lead">We've reinvigorated the digital real estate of this prestigious London event venue.</p>
    </div>
  </div>
  <div class="uk-section-large uk-container">
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <p class="uk-text-large">An ambitious digital campaign following 30 Euston Square’s rebrand</p>
        <p>In 2016 we embarked on a project to reinvigorate the online footprint for one of London’s premier event venues.</p>
        <p>A customer focused digital strategy led to a new website and a sustained program of digital marketing activity. The result has been a substantial impact on visitor numbers, enquires and ultimately bookings.</p>
        <p></p>
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
    <p>We identified the brand of 30 Euston Square Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="uk-section uk-light" style="background-color:black;">
    <div class="uk-container">
      <div class="uk-child-width-1-2 uk-flex uk-flex-middle" uk-grid>
        <div class="uk-flex-last@m">
          <h2>Key project objectives</h2>
          <ul>
            <li>Build a stand-out website to bring the venue’s rooms and facilities to life</li>
            <li>Implement a design that encourages visitors engagement and contact</li>
            <li>Ensure a strong UX experience, fast load times and responsiveness</li>
            <li>Develop and execute a sustained digital marketing plan that will deliver tangible business benefits</li>
            <li>Implement website tracking to measure the effectiveness of each campaign</li>
          </ul>
        </div>
        <div>
          <img src="https://themarketingcampaigncompany.co.uk/wp-content/uploads/2016/12/30es-google-analytics-1.png">
        </div>
      </div>
    </div>
  </div>
  <div class="uk-section">
    <div class="uk-container">
      <div class="uk-child-width-1-2 uk-flex uk-flex-middle" uk-grid>
        <div>
          <h2>What we achieved</h2>
          <p>A sustained improvement in website visitors and bookings.</p>
          <p>The ability to better understand the campaigns and activity that drive the greatest number of enquiries and bookings.</p>
          <p>And a very happy client!</p>
        </div>
        <div>
          <img src="https://themarketingcampaigncompany.co.uk/wp-content/uploads/2016/12/30-Euston-Square-achievements.jpg">
        </div>
      </div>
    </div>
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
    height: 600px;
}
</style>
