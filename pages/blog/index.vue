<template>
<div class="uk-container uk-section">
  <p class="tmcc-font-montserrat">Stay up to date</p>
  <h1>Read our latest news</h1>
  <nuxt-link to="/blog/wish-splendid-effervescent-opulent-christmas-2017">blog</nuxt-link>
  <div class="uk-child-width-1-2" uk-grid>
    <template v-for="(post, index) in posts">
        <a class="uk-link-reset" v-bind:href="blogUrl(post.slug)" v-bind:key="index">
          <article>
            <img src="http://via.placeholder.com/580x350" alt="post.title.rendered">
            <span class="uk-text-meta" v-text="postDate(post.modified)"></span>
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
      posts: ''
    }
  },
  beforeCreate() {
    const cmsAPIBase = process.env.cmsAPIBase
    axios.get(cmsAPIBase + 'posts')
      .then((res) => {
        this.posts = res.data;
      })
  },
  methods: {
    blogUrl: (slug) => {
      return '/blog/'+slug
    }
  },
  methods: {
    postDate: (unformattedPostDate) => {
      return moment(unformattedPostDate).format()
    }
  }
}
</script>

<style>
</style>
