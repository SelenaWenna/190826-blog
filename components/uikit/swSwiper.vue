<template lang="pug">
div
  v-carousel(
    v-model="currentSlide"
    hide-delimiters
    :show-arrows="false"
  )
    v-carousel-item(
      v-for="n in 5"
      :key="n"
      :src="`/img/${category}/${n}.jpg`"
    )
  v-slide-group(
    v-model="currentSlide"
    :show-arrows="true"
    )
    v-slide-item.sw-slide.mx-1.mt-2.mb-2(
      v-for="n in 5"
      :key="n"
      v-slot:default="{ active, toggle }"
      )
      v-img(
        :src="`/img/${category}/${n}.jpg`"
        height="100"
        width="200"
        @click="currentSlide = n - 1"
        )
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    currentSlide: null
  })
}
</script>

<style scoped>
.sw-slide {
  cursor: pointer;
}
</style>
