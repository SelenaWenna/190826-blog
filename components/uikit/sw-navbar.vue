<template lang="pug">
v-toolbar.d-none.d-sm-block(dense)
  v-toolbar-items
    v-btn.sw-navbar__link(
      v-for="item in items"
      :key="item.title"
      :color="item.color"
      :to="item.url"
      nuxt
      dark
      ) {{ item.title }}
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-toolbar__content {
    padding-right: 0;
    padding-left: 0;
  }
  .v-toolbar__items {
    width: 100%;
  }
}
.sw-navbar__link {
  flex: 1 1 auto;
}
</style>
