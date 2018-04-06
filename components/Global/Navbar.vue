<template>
<div class="uk-container">
  <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
    <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="#">
          <img src="/images/LOGO.svg">
        </a>
    </div>
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li><a href="uk-active">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact</a></li>
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
        width: 135px;
    }
}
</style>
