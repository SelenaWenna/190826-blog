<template lang="pug">
.sw-posts
  v-card.sw-posts__item.mt-12(
    v-for="post in posts"
    :key="post.id"
  )
    .sw-date.white--text
      .sw-date__number.orange.headline.pa-2 28
      .sw-date__month.light-blue.pa-1 feb
    v-card-title {{ post.title }}
    v-card-text.pb-0
      p {{ post.body }}
    v-card-text.pt-0.pb-0
      sw-swiper(:category="post.category")
    v-card-text
      v-layout.align-center(wrap)
        v-flex.sw-additions
          span.text-no-wrap.mr-12 Category: {{ category(post) }}
          span.text-no-wrap
            v-icon.mr-1(small) mdi-comment-multiple-outline
            span {{ post.comments.length }} Comments
        v-flex.text-right
          v-btn.ma-0(
            color="secondary"
            text
            small
            nuxt
            :to="`/posts/${post.id}`"
            ) Read more
            v-icon.ml-2(small) mdi-arrow-right
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import swSwiper from '@/components/uikit/swSwiper'

export default {
  components: {
    swSwiper
  },
  computed: {
    ...mapGetters(['getPosts']),
    posts () {
      return this.getPosts({ max: 3 })
    }
  },
  created () {
    this.setPosts()
  },
  methods: {
    ...mapActions(['setPosts']),
    category (post) {
      return Object.keys(post).length && post.category[0].toUpperCase() + post.category.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.sw-additions {
  display: flex;
  flex-wrap: wrap;
}
.sw-posts {
  margin-right: 270px;
  &__item {
    position: relative;
  }
}
.sw-date {
  position: absolute;
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  text-align: center;
  box-sizing: border-box;
  text-transform: uppercase;
  top: -40px;
  left: 0;

  &__number {
    width: 62px;
    line-height: 1;
  }

  &__month {
    width: 62px;
    line-height: 1;
  }
}
</style>
