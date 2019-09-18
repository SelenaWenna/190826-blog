<template lang="pug">
div
  sw-top-stories
  .sw-main
    sw-aside.d-none.d-md-block
    div(
      :class="isVisibleAside ? 'sw-main__content' : ''"
      )
      sw-posts
</template>

<script>
// Components
import swTopStories from '@/components/sw-top-stories.vue'
import swPosts from '@/components/sw-posts.vue'
import swAside from '@/components/sw-aside.vue'

export default {
  components: {
    swTopStories,
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
