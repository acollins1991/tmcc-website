<template>
<section class="uk-section">

  <!-- Featured Case Study -->
  <div class="uk-height-large uk-margin-xlarge-bottom tmcc-featured-case-study uk-background-center-left uk-background-norepeat uk-background-cover" v-bind:style="'background-image:url('+featuredCaseStudy.image+')'">
    <div class="uk-container uk-height-1-1 tmcc-featured-case-study__container">
      <div class="uk-flex uk-flex-between uk-height-1-1">
        <div class="tmcc-featured-case-study__link-container">
          <a v-bind:href="featuredCaseStudy.link" class="uk-display-block uk-link-reset uk-background-secondary uk-light uk-flex uk-flex-column tmcc-featured-case-study__link">
            <span class="uk-display-block uk-margin-small-bottom uk-light view-project">View Project <span uk-icon="icon: arrow-right"></span></span>
            <h2 class="uk-h3 uk-margin-remove title" v-text="featuredCaseStudy.title">Now Health</h2>
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
  <div class="tmcc-case-studies">

    <template v-for="(casestudy, index) in casestudies">
        <div v-bind:key="index" class="uk-padding-small tmcc-case-studies__case-study">
          <a v-bind:key="index" v-bind:href="casestudy.link" class="uk-display-block uk-link-reset">
            <div class="uk-flex uk-flex-bottom uk-flex-between uk-margin-bottom">
              <h2 class="uk-h3 uk-margin-remove" v-text="casestudy.title"></h2>
              <span class="uk-text-small">View project <span uk-icon="icon: arrow-right"></span></span>
            </div>
            <div class="uk-cover-container tmcc-case-studies__case-study-image">
              <img v-bind:src="casestudy.image" uk-cover>
            </div>
            <span class="uk-text-muted uk-text-center uk-text-small uk-display-block uk-margin-top uk-margin-bottom" v-text="casestudy.services">Hosting, Web Design, Paid Ads</span>
          </a>
          <div class="uk-padding-small uk-margin-large-top uk-margin-large-bottom tmcc-case-studies__testimonial" v-if="casestudy.testimonial.show">
            <blockquote>
              <p v-text="casestudy.testimonial.quote"></p>
              <footer v-text="casestudy.testimonial.source"></footer>
              <span class="quote-marks">"</span>
            </blockquote>
          </div>
        </div>
    </template>

  </div>

</section>
</template>

<script>
import Masonry from 'masonry-layout'

export default {
  name: 'CaseStudies',
  data() {
    return {
      featuredCaseStudy: {
        title: 'Searcys',
        link: '#',
        image: 'https://source.unsplash.com/WLUHO9A_xik/1500x500'
      },
      casestudies: [{
        title: 'Now Health',
        link: '#',
        image: 'https://source.unsplash.com/WNZoVFUXE9E/540x600',
        services: 'Hosting, Web Design, Paid Ads',
        testimonial: {
          show: true,
          quote: "I wouldn't hesitate to use The Marketing Campaign Company again or receommend them to anybody",
          source: 'Johanna Bryne, Searcys'
        }
      }, {
        title: 'Platform7Teen',
        link: '#',
        image: 'https://source.unsplash.com/CAbSFT8LOj8/540x600',
        services: 'Hosting, Web Design, Paid Ads',
        testimonial: {
          show: false,
          quote: "",
          source: ''
        }
      }, {
        title: '30 Euston Square',
        link: '#',
        image: 'https://source.unsplash.com/4aIOIjIFfus/540x600',
        services: 'Hosting, Web Design, Paid Ads',
        testimonial: {
          show: false,
          quote: "",
          source: ''
        }
      }, {
        title: '30 Euston Square 4',
        link: '#',
        image: 'https://source.unsplash.com/gH0B2nJW06k/540x600',
        services: 'Hosting, Web Design, Paid Ads',
        testimonial: {
          show: true,
          quote: "I wouldn't hesitate to use The Marketing Campaign Company again or receommend them to anybody",
          source: 'Johanna Bryne, Searcys'
        }
      }, {
        title: '30 Euston Square 1',
        link: '#',
        image: 'https://source.unsplash.com/pitxaomeYKY/540x600',
        services: 'Hosting, Web Design, Paid Ads',
        testimonial: {
          show: false,
          quote: "",
          source: ''
        }
      }, {
        title: '30 Euston Square 2',
        link: '#',
        image: 'https://source.unsplash.com/HMHz31V8GVg/540x600',
        services: 'Hosting, Web Design, Paid Ads',
        testimonial: {
          show: false,
          quote: "",
          source: ''
        }
      }]
    }
  },
  mounted() {

    // masonry layout
    var elem = document.querySelector('.tmcc-case-studies')
    var msnry = new Masonry(elem, {
      // options
      itemSelector: '.tmcc-case-studies__case-study',
      percentPosition: true
    })

  }
}
</script>

<style lang="scss" scoped>
.tmcc-featured-case-study {
    position: relative;
    &__overlay {
        position: absolute;
        top: -5%;
        right: 0;
        width: 100%;
        height: 110%;
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
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 1140px;
    &__case-study {
        box-sizing: border-box;
        display: block;
        float: left;
        width: 50%;
        @media screen and (max-width: 640px) {
            width: 100%;
        }
        &:nth-child(2) {
            @media screen and (min-width: 641px) {
                margin-top: 100px;
            }
        }
        .tmcc-case-studies__case-study-image {
            img {
                transition: opacity 0.15s;
            }
        }
        a {
            &:hover {
                .tmcc-case-studies__case-study-image {
                    img {
                        opacity: 0.85;
                    }
                }
            }
        }
    }
    &__case-study-image {
        height: 600px;
        @media screen and (max-width: 960px) {
            height: 400px;
        }
    }
    &__testimonial {
        blockquote {
            position: relative;
            color: #666;
            span.quote-marks {
                position: absolute;
                top: 0;
                left: 10%;
                transform: translateY(-30%);
                font-size: 10rem;
                color: #e8e8e8;
                z-index: -1;
            }
        }
    }
}
</style>
