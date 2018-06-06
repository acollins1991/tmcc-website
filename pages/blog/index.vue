<template>
<div class="uk-container uk-section">
  <p class="tmcc-font-montserrat">Stay up to date</p>
  <h1>Read our latest posts</h1>
  <!-- placeholders -->
  <div class="uk-child-width-1-2" uk-grid v-if="loading">
    <content-placeholders :rounded="true">
      <content-placeholders-img />
      <content-placeholders-heading />
      <content-placeholders-text />
    </content-placeholders>
    <content-placeholders :rounded="true">
      <content-placeholders-img />
      <content-placeholders-heading />
      <content-placeholders-text />
    </content-placeholders>
    <content-placeholders :rounded="true">
      <content-placeholders-img />
      <content-placeholders-heading />
      <content-placeholders-text />
    </content-placeholders>
    <content-placeholders :rounded="true">
      <content-placeholders-img />
      <content-placeholders-heading />
      <content-placeholders-text />
    </content-placeholders>
  </div>
  <!-- posts -->
  <div class="uk-child-width-1-2" uk-grid v-else>
    <template v-for="(post, index) in posts">
        <a class="uk-link-reset" v-bind:href="blogUrl(post.slug)" v-bind:key="index">
          <article>
            <img src="http://via.placeholder.com/580x350" alt="post.title.rendered">
            <h1 class="uk-h3" v-html="post.title.rendered"></h1>
            <span class="uk-text-meta">read more <span uk-icon="chevron-right"></span></span>
          </article>
        </a>
    </template>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  data() {
    return {
      loading: true,
      posts: ''
    }
  },
  beforeCreate() {
    const cmsAPIBase = process.env.cmsAPIBase
    axios.get(cmsAPIBase + 'posts')
      .then((res) => {
        this.loading = false
        this.posts = res.data
      })
  },
  methods: {
    blogUrl: (slug) => {
      return '/blog/' + slug
    }
  }
}
</script>

<style>
</style>
