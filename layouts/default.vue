<template lang="pug">
  v-app.sw-app
    //- v-navigation-drawer(
      v-model="drawer"
      clipped
      fixed
      app
      )
      v-list
        v-list-item(
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        )
          v-list-item-action
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title(v-text="item.title")
    v-container.sw-content
      v-card
        v-app-bar
          v-toolbar-title.sw-logo__spacer
            img.sw-logo(src="/img/logo.png" alt="MagBlog")
          //- v-toolbar-nav-icon(@click.stop="drawer = !drawer")
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
import swSocial from '@/components/uikit/swSocial'
import swNavbar from '@/components/uikit/swNavbar'

export default {
  components: {
    swSocial,
    swNavbar
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
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
