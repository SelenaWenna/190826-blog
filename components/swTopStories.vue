<template lang="pug">
div
  .sw-title.headline.light-blue--text Top stories
  v-slide-group(
    show-arrows
    )
    template(v-slot:prev)
      v-btn(
        color="light-blue"
        dark
        small
        fab
        )
        v-icon(large) mdi-menu-left
    template(v-slot:next)
      v-btn(
        color="light-blue"
        dark
        small
        fab
        )
        v-icon(large) mdi-menu-right
    v-slide-item.mx-1.mt-2.mb-2(
      v-for="(post, n) in posts"
      :key="post.id"
      v-slot:default="{ active, toggle }"
      )
      v-hover(v-slot:default="{ hover }")
        v-card(
          width="400"
          :elevation="hover ? 6 : 2"
          :to="`/posts/${post.id}`"
          )
          v-img(
            :src="`/img/${post.category}/${n % 5 + 1}.jpg`"
            height="200"
            )
          v-card-text.white--text.font-weight-bold(
            :class="colors[n]"
          ) {{ post.category.toUpperCase() }}
          v-card-text.font-weight-bold.text-truncate {{ post.title }}
</template>

<script>
import { mapGetters } from 'vuex'
import { colors } from '@/utils/constants'

export default {
  computed: {
    ...mapGetters(['getPosts']),
    posts () {
      return this.getPosts({ max: 10 })
    },
    colors () {
      return colors
    }
  }
}
</script>

<style scoped>
.sw-title {
  text-transform: uppercase;
}
</style>
