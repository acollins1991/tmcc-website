<template>
<div class="uk-container uk-container-small">
  <template v-if="loading">
    <content-placeholders :rounded="true">
      <content-placeholders-heading />
      <content-placeholders-heading />
      <content-placeholders-text />
      <content-placeholders-text />
      <content-placeholders-text />
    </content-placeholders>
  </template>
  <template v-else>
  <h1 v-html="postTitle"></h1>
  <div v-html="postContent"></div>
  </template>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: true,
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
        if (!res.data[0]) {
          this.$root.error({
            'statusCode': 404,
            'message': 'OK'
          })
        } else {
          this.loading = false
          this.postData = res.data[0]
          this.postTitle = this.postData.title.rendered
          this.postContent = this.postData.content.rendered
          this.postExcerpt = this.postData.excerpt.rendered
        }
      })
      .catch((e) => {
        this.$root.error({
          'statusCode': 404,
          'message': 'OK'
        })
      })
  },
  head() {
    return {
      title: this.postTitle,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.postExcerpt
      }]
    }
  }
}
</script>

<style>
</style>
