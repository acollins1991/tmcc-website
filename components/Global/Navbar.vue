<template>
<div class="uk-container">
  <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
    <div class="uk-navbar-left">
      <nuxt-link class="uk-navbar-item uk-logo" to="/">
        <img src="/images/tmcc-logo.svg">
      </nuxt-link>
    </div>
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <nuxt-link tag="li" active-class="uk-active" exact to="/"><a>Home</a></nuxt-link>
        <nuxt-link tag="li" active-class="uk-active" exact to="/about"><a>About</a></nuxt-link>
        <nuxt-link tag="li" active-class="uk-active" exact to="/blog"><a>Blog</a></nuxt-link>
        <nuxt-link tag="li" active-class="uk-active" exact to="/services"><a>Services</a></nuxt-link>
        <nuxt-link tag="li" active-class="uk-active" exact to="/contact"><a>Contact</a></nuxt-link>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'SiteNavbar'
}
</script>

<style lang="scss" scoped>
.uk-logo {
    img {
        width: 150px;
    }
}
</style>
