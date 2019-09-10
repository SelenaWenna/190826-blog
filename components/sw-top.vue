<template lang="pug">
v-card.mt-4
  v-toolbar.sw-toolbar(
    color="indigo"
    dark
    ) Top stories
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
          :src="post.images[i % 5]"
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
      return this.getPosts({ max: 7 })
    }
  }
}
</script>
