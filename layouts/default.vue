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
      v-container.sw-container
        img.sw-border.sw-border_left(
          src="/img/border-left.png"
          )
        v-card.sw-container__card.mb-12
          v-app-bar
            .sw-logo__spacer
              sw-navbar-adaptive(:items="items")
              sw-social
            img.sw-logo(src="/img/logo.png" alt="MagBlog")
            sw-search

          sw-navbar(:items="items")
          v-content.sw-content.pa-0
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
import swNavbarAdaptive from '@/components/uikit/sw-navbar_adaptive.vue'
import swSearch from '@/components/uikit/sw-search.vue'

export default {
  components: {
    TheLoading,
    swSocial,
    swNavbar,
    swNavbarAdaptive,
    swSearch
  },
  data: () => ({
    loading: true,
    snackbar: true,
    items: [
      {
        title: 'Home',
        color: 'light-blue',
        url: '/'
      },
      {
        title: 'Top',
        color: 'orange',
        url: '/top'
      },
      {
        title: 'Archives',
        color: 'red',
        url: '/archives'
      },
      {
        title: 'Contact us',
        color: 'light-green',
        url: '/contact-us'
      }
    ]
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
.sw-app {
  min-width: 320px;
  background-color: #f5f5f5;
}
.sw-title {
  text-transform: uppercase;
}
.sw-main {
  position: relative;
  &__content {
    margin-right: 333px;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.v-application a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
}
</style>

<style lang="scss" scoped>
.sw-container {
  margin-top: 100px;
  position: relative;
  &__card {
    min-height: 700px;
  }
}
.sw-logo {
  position: absolute;
  top: -64px;
  left: 0;
  &__spacer {
    width: 197px;
    min-width: 197px;
    text-align: right;
    padding-right: 25px;
    display: flex;
    justify-content: flex-end;
  }
}
.sw-menu {
  &_adaptive {
    width: 188px;
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
.sw-content {
  min-height: 100%;
}
</style>
