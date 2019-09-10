<template lang="pug">
v-app.sw-app
  the-loading(
    :loading="loading"
    )
  div(
    v-if="!loading"
    )
    v-snackbar(
      v-model="snackbar"
      color="light-blue"
      dark
      multi-line
      top
      :timeout="5000"
      )
      v-layout
        v-flex
          div The page is in development.
          div I'm glad to see you here! :)
        v-btn(
          text
          @click="snackbar = false"
          ) Close
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

import TheLoading from '@/components/uikit/the-loading.vue'
import swSocial from '@/components/uikit/sw-social.vue'
import swNavbar from '@/components/uikit/sw-navbar.vue'

export default {
  components: {
    TheLoading,
    swSocial,
    swNavbar
  },
  data: () => ({
    loading: true,
    snackbar: true
  }),
  async created () {
    await this.fetchPosts()
    this.loading = false
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
