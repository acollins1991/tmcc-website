<template>
<section class="uk-section">

  <!-- Featured Case Study -->
  <div class="uk-height-large uk-margin-xlarge-bottom tmcc-featured-case-study uk-background-center-left uk-background-norepeat uk-background-cover" v-bind:style="'background-image:url('+featuredCaseStudy.image+')'">
    <div class="uk-container uk-container-small uk-height-1-1 tmcc-featured-case-study__container">
      <div class="uk-flex uk-flex-between uk-height-1-1">
        <div class="tmcc-featured-case-study__link-container">
          <a v-bind:href="featuredCaseStudy.link" class="uk-display-block uk-link-reset uk-background-secondary uk-light uk-flex uk-flex-column tmcc-featured-case-study__link">
            <span class="uk-display-block uk-margin-small-bottom uk-light view-project">View Project <span uk-icon="icon: arrow-right"></span></span>
            <h2 class="uk-h3 uk-margin-remove title">Now Health</h2>
          </a>
        </div>
        <div style="align-self: center;">
          <h2>Our Work</h2>
          <span class="uk-text-small">Featured Project <span uk-icon="icon: arrow-down"></span></span>
        </div>
      </div>
    </div>
    <div class="tmcc-featured-case-study__overlay" role="display"></div>
  </div>

  <!-- Case Studies -->
  <div class="uk-container uk-container-small tmcc-case-studies">
    <div class="uk-grid-medium uk-child-width-1-2" uk-grid-parallax>

      <template v-for="(casestudy, index) in casestudies">
          <a v-bind:key="index" v-bind:href="casestudy.link" class="uk-display-block uk-link-reset tmcc-case-studies__case-study">
            <div class="uk-flex uk-flex-bottom uk-flex-between uk-margin-bottom">
              <h2 class="uk-h3 uk-margin-remove" v-text="casestudy.title"></h2>
              <span class="uk-text-small">View the project <span uk-icon="icon: arrow-right"></span></span>
            </div>
            <div class="uk-height-large uk-cover-container">
              <img v-bind:src="casestudy.image" uk-cover>
            </div>
            <span class="uk-text-muted uk-text-center uk-text-small uk-display-block uk-margin-top uk-margin-bottom">Hosting, Web Design, Paid Ads</span>
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
        image: 'https://source.unsplash.com/random/1500x450'
      },
      casestudies: [{
        title: '30 Euston Square 1',
        link: '#',
        image: 'https://source.unsplash.com/random/600x600'
      }, {
        title: '30 Euston Square 2',
        link: '#',
        image: 'https://source.unsplash.com/random/600x600'
      }, {
        title: '30 Euston Square 3',
        link: '#',
        image: 'https://source.unsplash.com/random/600x600'
      }, {
        title: '30 Euston Square 4',
        link: '#',
        image: 'https://source.unsplash.com/random/600x600'
      }, {
        title: '30 Euston Square 1',
        link: '#',
        image: 'https://source.unsplash.com/random/600x600'
      }, {
        title: '30 Euston Square 2',
        link: '#',
        image: 'https://source.unsplash.com/random/600x600'
      }]
    }
  },
  mounted() {
    window.sr = ScrollReveal()
    window.sr.reveal('.tmcc-case-studies__case-study')
  }
}
</script>

<style lang="scss" scoped>
.tmcc-featured-case-study {
    position: relative;
    &__overlay {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 60%);
        z-index: 1;
    }
    &__container {
        position: relative;
        z-index: 2;
    }
    &__link-container {
        align-self: flex-end;
    }
    &__link {
        padding: 24px;
        transform: translateY(24px);
        span {
            &.view-project {
                float: right;
                background-color: inherit;
                padding: 8px;
                transition: transform 0.25s;
            }
            &.title {}
        }
        &:hover {
            span.view-project {
                transform: translateX(50px);
            }
        }
    }
}
.tmcc-case-studies {
    &__case-study {
        &:nth-child(2n+0) {}
    }
}
</style>
