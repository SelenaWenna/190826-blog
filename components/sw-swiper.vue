<template lang="pug">
div
  v-carousel(
    v-model="currentSlide"
    hide-delimiters
    :show-arrows="false"
  )
    v-carousel-item(
      v-for="(image, n) in images"
      :key="image"
      :src="image"
    )
  v-slide-group(
    v-model="currentSlide"
    :show-arrows="true"
    )
    v-slide-item.sw-slide.mx-1.mt-2.mb-2(
      v-for="(image, n) in images"
      :key="image"
      v-slot:default="{ active, toggle }"
      )
      v-img(
        :src="image"
        height="100"
        width="200"
        @click="currentSlide = n"
        )
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => []
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
