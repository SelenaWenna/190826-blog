<template lang="pug">
  v-app.sw-app
    v-container.sw-content
      v-card.mb-12
        v-app-bar
          v-toolbar-title.sw-logo__spacer
            img.sw-logo(src="/img/logo.png" alt="MagBlog")
          v-text-field(
            color="light-blue"
            hide-details
            append-icon="mdi-magnify"
            outlined
            single-line
            )
          sw-social
        sw-navbar
        v-content
          v-container
            nuxt
        v-footer.justify-center(
          app
        ) &copy; 2019 Made by Selena Wenna
</template>

<script>
import { mapActions } from 'vuex'

import swSocial from '@/components/uikit/swSocial'
import swNavbar from '@/components/uikit/swNavbar'

export default {
  components: {
    swSocial,
    swNavbar
  },
  created () {
    this.fetchPosts()
  },
  methods: {
    ...mapActions(['fetchPosts'])
  }
}
</script>

<style lang="scss" scoped>
.sw-app {
  background-color: #f5f5f5;
}
.sw-content {
  margin-top: 100px;
}
.sw-logo {
  position: absolute;
  top: -100%;
  left: 0;
  &__spacer {
    padding-left: 180px;
  }
}
</style>
