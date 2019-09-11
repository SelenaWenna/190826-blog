<template lang="pug">
v-app.sw-app
  the-loading(
    :loading="loading"
    )
  transition(
    name="fade"
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
        v-layout.align-center
          v-flex
            div The page is in development.
            div I'm glad to see you here! :)
          v-btn(
            text
            @click="snackbar = false"
            ) Close
      v-container.sw-content
        img.sw-border.sw-border_left(
          src="/img/border-left.png"
          )
        v-card.sw-content__card.mb-12
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

          img.sw-border.sw-border_top(
            src="/img/border-right.png"
            )
          img.sw-border.sw-border_bottom(
            src="/img/border-right.png"
            )
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

<style lang="scss">
.sw-main__content {
  margin-right: 333px;
}
.sw-title {
  text-transform: uppercase;
}
.sw-main {
  position: relative;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<style lang="scss" scoped>
.sw-app {
  background-color: #f5f5f5;
}
.sw-content {
  margin-top: 100px;
  position: relative;
  &__card {
    min-height: 700px;
  }
}
.sw-logo {
  position: absolute;
  top: -100%;
  left: 0;
  &__spacer {
    padding-left: 180px;
  }
}
.sw-border {
  position: absolute;
  &_left {
    left: -400px;
    top: -185px;
  }
  &_top {
    right: -14px;
    top: 200px;
    z-index: 2;
  }
  &_bottom {
    right: -14px;
    bottom: 5px;
  }
}
</style>
