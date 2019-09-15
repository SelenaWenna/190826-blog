<template lang="pug">
.sw-posts
  v-card.sw-posts__item.mt-12(
    v-for="post in posts"
    :key="post.id"
  )
    .sw-date.white--text
      .sw-date__number.orange.headline.pa-2 {{ formatDay(post.date) }}
      .sw-date__month.light-blue.pa-1 {{ formatMonth(post.date)}}
    v-card-title
      nuxt-link(
        :to="`/posts/${post.id}`"
        ) {{ post.title }}
    v-card-text.pb-0
      p {{ post.body }}
    v-card-text.pt-0.pb-0
      sw-swiper(:images="post.images")
    v-card-text
      v-layout.align-center(wrap)
        v-flex.sw-additions
          v-flex.text-no-wrap(xs12 md6) Category: {{ formatCategory(post) }}
          v-flex.text-no-wrap(xs12 md6)
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
            v-icon.ml-2(small) mdi-chevron-double-right
  v-btn.ml-0.mt-4(
    color="primary"
    text
    small
    @click="wip"
    )
    v-icon.ml-2(small) mdi-chevron-double-left
    | Older posts
</template>

<script>
import { mapGetters } from 'vuex'
import { upperFirst } from '@/utils/sw-string.js'
import swSwiper from '@/components/sw-swiper.vue'

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
  methods: {
    formatCategory (post) {
      return Object.keys(post).length && upperFirst(post.category)
    },
    formatDay (date) {
      return date.getDate()
    },
    formatMonth (date) {
      const options = {
        month: 'long'
      }
      return date.toLocaleString('en', options).slice(0, 3)
    },
    wip () {
      alert('Work in progress...')
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
