<template lang="html">
  <div id="OffCanvasMenu" uk-offcanvas>
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
        <nuxt-link class="uk-offcanvas-close" tag="li" active-class="uk-active" exact to="/"><a>Home</a></nuxt-link>
        <nuxt-link class="uk-offcanvas-close" tag="li" active-class="uk-active" exact to="/about"><a>About</a></nuxt-link>
        <nuxt-link class="uk-offcanvas-close" tag="li" active-class="uk-active" exact to="/blog"><a>Blog</a></nuxt-link>
        <nuxt-link class="uk-offcanvas-close" tag="li" active-class="uk-active" exact to="/services"><a>Services</a></nuxt-link>
        <nuxt-link class="uk-offcanvas-close" tag="li" active-class="uk-active" exact to="/contact"><a>Contact</a></nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OffCanvasMenu'
}
</script>

<style lang="scss" scoped>
// Hack to make menu itmes close the menu on click, but need to unstyle the uk-off-canvas-close class
li.uk-offcanvas-close {
    position: unset;
    z-index: unset;
    top: unset;
    right: unset;
    padding: unset;
}
</style>
