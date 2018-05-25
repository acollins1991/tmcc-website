<template>
<div class="uk-container">
  <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
    <div class="uk-navbar-left">
      <nuxt-link class="uk-navbar-item uk-logo" to="/">
        <img src="/images/tmcc-logo.svg">
      </nuxt-link>
    </div>
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav uk-visible@m" v-bind:class="{ 'uk-navbar-nav--casestudy': isCaseStudyPage }">
        <nuxt-link tag="li" active-class="uk-active" exact to="/"><a>Home</a></nuxt-link>
        <nuxt-link tag="li" active-class="uk-active" exact to="/about"><a>About</a></nuxt-link>
        <nuxt-link tag="li" active-class="uk-active" exact to="/blog"><a>Blog</a></nuxt-link>
        <nuxt-link tag="li" active-class="uk-active" exact to="/services"><a>Services</a></nuxt-link>
        <nuxt-link tag="li" active-class="uk-active" exact to="/contact"><a>Contact</a></nuxt-link>
      </ul>
      <a class="uk-navbar-toggle uk-hidden@m" href="#" uk-toggle="target: #OffCanvasMenu">
        <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span>
      </a>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'SiteNavbar',
  computed: {
    isCaseStudyPage: (context) => {
      if (context.$route.path.includes('casestudies')) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.uk-logo {
    padding: 0;
    img {
        width: 150px;
    }
}
.uk-navbar-nav--casestudy {
    li {
        a {
            color: #ffffff;
        }
        &.uk-active,
        &:hover {
            a {
                color: #333333;
            }
        }
    }
}
</style>
