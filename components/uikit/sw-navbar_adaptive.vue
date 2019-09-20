<template lang="pug">
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
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
