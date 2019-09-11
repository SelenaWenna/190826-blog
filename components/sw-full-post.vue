<template lang="pug">
v-card.sw-posts__item.mt-12
  .sw-date.white--text
    .sw-date__number.orange.headline.pa-2 {{ formatDay(post.date) }}
    .sw-date__month.light-blue.pa-1 {{ formatMonth(post.date)}}
  v-card-title {{ post.title }}
  v-card-text.pb-0
    p {{ post.body }}
  v-card-text.pt-0.pb-0
    sw-swiper(:images="post.images")
  v-card-text
    p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    p Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</template>

<script>
import { upperFirst } from '@/utils/sw-string.js'
import swSwiper from '@/components/sw-swiper.vue'

export default {
  components: {
    swSwiper
  },
  props: {
    post: {
      type: Object,
      default: () => ({})
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
