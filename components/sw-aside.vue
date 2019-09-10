<template lang="pug">
.sw-aside
  sw-likes
  sw-archives
  sw-tag-cloud
</template>

<script>
import swLikes from '@/components/sw-likes.vue'
import swArchives from '@/components/sw-archives.vue'
import swTagCloud from '@/components/sw-tag-cloud.vue'

export default {
  components: {
    swLikes,
    swArchives,
    swTagCloud
  }
}
</script>

<style lang="scss">
.sw-aside {
  position: absolute;
  right: 0;
  width: 320px;
  &__img {
    width: 80px;
    min-width: 80px;
    height: 80px;
    object-fit: cover;
  }
  &__content {
    height: 88px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  &__more {
    flex: 0 0 auto;
    margin: auto 0 0 auto;
  }
}
.sw-toolbar {
  text-transform: uppercase;
}
</style>
