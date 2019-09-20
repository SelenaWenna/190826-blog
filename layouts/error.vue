<template lang="pug">
v-card.sw-error.mx-auto(min-height="676")
  v-card-title.white--text
    h1.mx-auto(v-if="error.statusCode === 404") {{ pageNotFound }}
    h1.mx-auto(v-else) {{ otherError }}
  v-card-text.text-center
    v-btn(
      nuxt
      to="/"
      text
      dark
      ) Home page
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 30px;
}
.sw-error {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(/img/border-left.png);
  background-position: center;
}
</style>
