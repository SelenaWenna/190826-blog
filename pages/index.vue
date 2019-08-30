<template lang="pug">
div
  sw-swiper
  .sw-main
    sw-aside
    sw-posts
</template>

<script>
// Components
import swSwiper from '@/components/uikit/swTopSwiper'
import swPosts from '@/components/uikit/swPosts'
import swAside from '@/components/uikit/swAside'

export default {
  components: {
    swSwiper,
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
