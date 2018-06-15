<template>
  <footer class="uk-background-muted uk-section-small uk-margin-xlarge-top">
    <div class="uk-container uk-container-large">

      <!-- Conditional on homepage -->
      <template v-if="$route.name == 'index'">

      <div uk-grid>
        <!-- ARTICLE -->
        <div class="uk-width-2-5">
          <h2 class="uk-text-center">Read The Latest</h2>
          <a href="#" class="uk-link-reset uk-display-block">
            <article class="uk-flex" uk-grid>
              <div class="uk-width-3-4">
                <h1 class="uk-h5">30 seconds with Chloe Alfano</h1>
                <a href="#" class="uk-link-reset uk-text-muted uk-text-small">read more ></a>
              </div>
              <div class="uk-width-1-4 uk-flex-first">
                <p class="uk-text-muted uk-text-small">17th November 2018</p>
              </div>
            </article>
          </a>
          <hr>
          <a href="#" class="uk-link-reset uk-display-block">
            <article class="uk-flex" uk-grid>
              <div class="uk-width-3-4">
                <h1 class="uk-h5">Fake news and the impact on marketing</h1>
                <a href="#" class="uk-link-reset uk-text-muted uk-text-small">read more ></a>
              </div>
              <div class="uk-width-1-4 uk-flex-first">
                <p class="uk-text-muted uk-text-small">17th November 2018</p>
              </div>
            </article>
          </a>
          <hr>
          <a href="#" class="uk-link-reset uk-display-block">
            <article class="uk-flex" uk-grid>
              <div class="uk-width-3-4">
                <h1 class="uk-h5">Sed accumsan maximus augue sed malesuada</h1>
                <a href="#" class="uk-link-reset uk-text-muted uk-text-small">read more ></a>
              </div>
              <div class="uk-width-1-4 uk-flex-first">
                <p class="uk-text-muted uk-text-small">17th November 2018</p>
              </div>
            </article>
          </a>
        </div>
        <!-- SOCIAL -->
        <div class="uk-width-3-5" style="transform:translateY(-190px);">
          <div class="uk-grid-collapse uk-flex uk-flex-bottom" uk-grid>
            <div class="uk-width-1-2 uk-height-large uk-cover-container">
              <img src="http://via.placeholder.com/600x600" uk-cover>
              <div class="uk-position-bottom-left uk-padding-small">
                Follow us on Instagram
              </div>
            </div>
            <div class="uk-width-1-2 uk-height-medium uk-light uk-background-secondary">
              test
            </div>
          </div>
        </div>
      </div>

      </template>
      <!-- END Condition on homepage -->

      <div class="uk-flex uk-flex-column uk-flex-center uk-flex-none uk-padding">
        <h2 class="uk-text-center">Have a project in mind?</h2>
        <div class="uk-flex uk-flex-center">
          <a class="uk-button uk-button-default" href="/contact">Get Started <span uk-icon="icon: arrow-right"></span></a>
        </div>
      </div>
    </div>

    <div class="uk-flex">
      <nuxt-link to="/about" class="uk-display-block uk-link-reset uk-width-2-5@s uk-width-1-1 uk-background-primary uk-padding uk-text-center">
        <span style="color:#ffffff;">About Us <span uk-icon="icon: arrow-right; ratio: 2;"></span></span>
      </nuxt-link>
      <nuxt-link to="/blog" class="uk-display-block uk-link-reset uk-width-3-5@s uk-width-1-1 uk-padding uk-text-center" style="background-color:#52439C;">
        <span style="color:#ffffff;">Read more from our blog <span uk-icon="icon: arrow-right; ratio: 2;"></span></span>
      </nuxt-link>
    </div>

    <div class="uk-margin-top uk-flex uk-flex-right" uk-grid>
      <div class="uk-width-1-5@s uk-width-1-1">
        <h2 class="uk-h6 tmcc-font-montserrat uk-text-bold uk-text-uppercase">Hire</h2>
        <p class="uk-text-small">Want to create something with us?</p>
        <a class="uk-link-reset uk-text-small uk-text-bold tmcc-chat"><span uk-icon="icon: comment"></span> Chat with us</a>
      </div>
      <div class="uk-width-2-5@s uk-width-1-1">
        <h2 class="uk-h6 tmcc-font-montserrat uk-text-bold uk-text-uppercase">Let's talk business</h2>
        <address class="uk-text-small">1b Kilmuir House, Depot Road, Epsom, Surrey, KT17 4RJ</address>
        <a class="uk-link-reset uk-text-small uk-display-block" href="mailto:info@themarketingcampaigncopany.co.uk"><span uk-icon="icon: mail"></span> Email Us</a>
        <span class="uk-text-small uk-display-block"><span uk-icon="icon: phone"></span> +44 (0) 1372 807189</span>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>
