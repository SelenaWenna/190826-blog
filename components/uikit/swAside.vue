<template lang="pug">
.sw-aside
  v-card
    v-toolbar.sw-toolbar(
      color="indigo"
      dark
      ) You might Also like
    v-list
      div(
        v-for="(post, i) in posts"
        :key="post.id"
      )
        v-divider(
          v-if="i"
          )
        v-list-item.d-flex(
          three-line
          )
          img.sw-aside__img.mr-3(
            :src="post.images[0]"
            )
          v-list-item-content.sw-aside__content
            .body-2.text-truncate {{ post.title }}
            v-btn.sw-aside__more(
              color="secondary"
              text
              small
              nuxt
              :to="`/posts/${post.id}`"
              ) Modication
              v-icon(small) mdi-chevron-double-right
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getPosts']),
    posts () {
      return this.getPosts({ max: 4 })
    }
  }
}
</script>

<style lang="scss" scoped>
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
