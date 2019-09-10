<template lang="pug">
v-card.mt-4
  v-toolbar.sw-toolbar(
    color="indigo"
    dark
    ) Archives
  v-list
    div(
      v-for="(post, i) in posts"
      :key="post.id"
    )
      v-divider(
        v-if="i"
        )
      v-list-item.d-flex(
        :to="`/posts/${post.id}`"
        )
        v-list-item-icon
          v-icon(color="indigo") mdi-menu-right
        v-list-item-content
          .body-2.text-truncate {{ post.title }}
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
