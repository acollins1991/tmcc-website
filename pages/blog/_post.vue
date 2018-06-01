<template>
<div class="uk-container uk-container-small">
  <h1 v-html="postTitle"></h1>
  <div v-html="postContent"></div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      postData: '',
      postTitle: '',
      postContent: '',
      postExcerpt: ''
    }
  },
  // redirect if slug does not exist in wordpress and populate data is successful
  beforeCreate() {
    const postSlug = this.$route.params.post
    const cmsAPIBase = process.env.cmsAPIBase
    axios.get(cmsAPIBase + 'posts/?slug=' + postSlug)
      .then((res) => {
        this.postData = res.data[0]
        this.postTitle = this.postData.title.rendered
        this.postContent = this.postData.content.rendered
        this.postExcerpt = this.postData.excerpt.rendered
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  },
  head () {
    return {
      title: this.postTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.postExcerpt }
      ]
    }
  }
}
</script>

<style>
</style>
