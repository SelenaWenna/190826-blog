<template lang="pug">
.sw-aside
  sw-likes.sw-aside__item
  sw-archives.sw-aside__item(
    v-if="$route.path !== '/archives'"
    )
  sw-top.sw-aside__item(
    v-else
    )
</template>

<script>
import swLikes from '@/components/sw-likes.vue'
const swArchives = () => import('@/components/sw-archives.vue')
const swTop = () => import('@/components/sw-top.vue')

export default {
  components: {
    swLikes,
    swArchives,
    swTop
  }
}
</script>

<style lang="scss">
.sw-aside {
  float: right;
  width: 320px;
  &__item {
    position: relative;
  }
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
