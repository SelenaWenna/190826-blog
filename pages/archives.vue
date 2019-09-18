<template lang="pug">
div
  .sw-title.headline.light-blue--text Archives
  .sw-main
    sw-aside.d-none.d-md-block
    div(
      :class="isVisibleAside ? 'sw-main__content' : ''"
      )
      sw-posts
</template>

<script>
import swPosts from '@/components/sw-posts.vue'
import swAside from '@/components/sw-aside.vue'

export default {
  components: {
    swPosts,
    swAside
  },
  computed: {
    isVisibleAside () {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>
