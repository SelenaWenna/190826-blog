<template lang="pug">
div
  .sw-main
    sw-aside
    .sw-main__content
      sw-full-post(
        :post="post"
        )
      sw-comment-form(
        :postId="post.id"
        )
      sw-comments(
        :comments="post.comments"
        )
</template>

<script>
import { mapGetters } from 'vuex'

// Components
import swAside from '@/components/sw-aside.vue'
import swFullPost from '@/components/sw-full-post.vue'
import swCommentForm from '@/components/sw-comment-form.vue'
import swComments from '@/components/sw-comments.vue'

export default {
  components: {
    swAside,
    swFullPost,
    swCommentForm,
    swComments
  },
  computed: {
    ...mapGetters(['getPost']),
    post () {
      return this.getPost({ id: +this.$route.params.id })
    }
  }
}
</script>
