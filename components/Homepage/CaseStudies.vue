<template>
<section class="uk-section">

  <div class="uk-cover-container uk-height-large uk-margin-large-bottom">
    <img v-bind:src="featuredCaseStudy.image" uk-cover>
    <div class="uk-container uk-container-small uk-height-1-1" style="position:relative;z-index:1;">
      <div class="uk-flex uk-height-1-1" uk-grid>
        <div style="align-self: flex-end;">
          test
        </div>
        <div style="align-self: center;">
          test
        </div>
      </div>
    </div>
  </div>

  <div class="uk-container uk-container-small tmcc-case-studies">
    <div class="uk-grid-medium uk-child-width-1-2 uk-flex uk-flex-wrap" uk-grid-parallax>

      <template v-for="(casestudy, index) in casestudies">
        <a v-bind:key="index" v-bind:href="casestudy.link" class="uk-display-block uk-link-reset tmcc-case-studies__case-study">
          <div class="uk-flex uk-flex-bottom uk-flex-between uk-margin-bottom">
            <h2 class="uk-h3 uk-margin-remove" v-text="casestudy.title"></h2>
            <span class="uk-text-small">View the project <span uk-icon="icon: arrow-right"></span></span>
          </div>
          <div class="uk-height-large uk-cover-container">
            <img v-bind:src="casestudy.image" uk-cover>
          </div>
          <span class="uk-text-muted uk-text-center uk-text-small uk-display-block uk-margin-top">Hosting, Web Design, Paid Ads</span>
        </a>
      </template>

    </div>
  </div>

</section>
</template>

<script>
import ScrollReveal from 'scrollreveal'

export default {
  name: 'CaseStudies',
  data() {
    return {
      featuredCaseStudy: {
        title: '30 Euston Square 1',
        link: '#',
        image: 'http://via.placeholder.com/600x600'
      },
      casestudies: [{
        title: '30 Euston Square 1',
        link: '#',
        image: 'http://via.placeholder.com/600x600'
      }, {
        title: '30 Euston Square 2',
        link: '#',
        image: 'http://via.placeholder.com/600x600'
      }, {
        title: '30 Euston Square 3',
        link: '#',
        image: 'http://via.placeholder.com/600x600'
      }, {
        title: '30 Euston Square 4',
        link: '#',
        image: 'http://via.placeholder.com/600x600'
      }, {
        title: '30 Euston Square 1',
        link: '#',
        image: 'http://via.placeholder.com/600x600'
      }, {
        title: '30 Euston Square 2',
        link: '#',
        image: 'http://via.placeholder.com/600x600'
      }]
    }
  },
  mounted(){
    window.sr = ScrollReveal()
    window.sr.reveal('.tmcc-case-studies__case-study')
  }
}
</script>

<style lang="scss" scoped>
.tmcc-case-studies {
    &__case-study {
        &:nth-child(2n+0) {}
    }
}
</style>
