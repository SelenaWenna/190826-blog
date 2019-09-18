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
            .sw-logo__spacer
              v-menu(
                open-on-hover
                nudge-right="-16"
                nudge-top="8"
                )
                template(v-slot:activator="{ on }")
                  v-btn.d-block.d-sm-none(
                    fab
                    small
                    depressed
                    v-on="on"
                    )
                    v-icon mdi-menu
                v-list.sw-menu.sw-menu_adaptive.pa-0.elevation-10
                  v-list-item.text-center(
                    v-for="(item, index) in items"
                    :key="index"
                    :class="item.color"
                    :to="item.url"
                    dark
                    @click=""
                  )
                    v-list-item-title.sw-navbar__link(
                      nuxt
                      block
                      ) {{ item.title }}
              sw-social
            img.sw-logo(src="/img/logo.png" alt="MagBlog")
            transition-group.sw-search-group(name="fade" mode="out-in")
              v-layout.d-sm-none(key="searchBtn")
                v-spacer
                v-btn.transparent.sw-search-btn(
                  v-show="!showSearch"
                  fab
                  depressed
                  small
                  @click="showSearch = true"
                )
                  v-icon.sw-search-btn__icon mdi-magnify
              v-text-field#sw-search-input.d-sm-block(
                v-model="searchQuery"
                v-show="showSearch"
                key="searchInput"
                color="light-blue"
                :class="isAbsoluteSearch ? 'sw-search-input' : ''"
                hide-details
                prepend-inner-icon="mdi-magnify"
                outlined
                single-line
                @blur="hideSearchInput"
                )
                //- append-icon="mdi-close"
                template(v-slot:append="")
                  transition(name="fade")
                    v-icon(
                      v-if="isAbsoluteSearch || searchQuery"
                      @click="searchQuery = ''; showSearch = false"
                      ) mdi-close

          sw-navbar(:items="items")
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
    snackbar: true,
    showSearch: false,
    searchQuery: '',
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
  computed: {
    isAbsoluteSearch () {
      return this.$vuetify.breakpoint.xs
    }
  },
  watch: {
    showSearch (val) {
      if (val) {
        this.$nextTick(() => {
          document.getElementById('sw-search-input').dispatchEvent(new Event('focus'))
        })
      }
    }
  },
  async created () {
    await this.fetchPosts()
    this.loading = false
  },
  methods: {
    ...mapActions(['fetchPosts']),
    hideSearchInput () {
      if (!this.searchQuery) {
        this.showSearch = false
      }
    }
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
.sw-content {
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
.sw-search-group {
  display: flex;
  flex: 1 1 auto;
}
.sw-search-btn {
  margin-right: -12px;
  &__icon {
    opacity: 0.54;
  }
}
.sw-search-input {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
}
</style>
