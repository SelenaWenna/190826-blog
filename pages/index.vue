<template lang="pug">
div
  sw-top-stories
  .sw-main
    sw-aside
    sw-posts
</template>

<script>
// Components
import swTopStories from '@/components/swTopStories'
import swPosts from '@/components/uikit/swPosts'
import swAside from '@/components/uikit/swAside'

export default {
  components: {
    swTopStories,
    swPosts,
    swAside
  }
}
</script>

<style scoped>
.sw-main {
  position: relative;
}
</style>
