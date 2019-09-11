<template lang="pug">
v-card.mt-12
  v-toolbar.sw-toolbar(
    color="orange"
    dark
    ) Comments ({{ comments.length }})
  v-card-text
    v-list(three-line)
      div(
        v-for="(item, i) in comments"
        :key="item.id"
        )
        v-divider(
          v-if="i"
          )
        v-list-item(
          :key="item.name"
          @click=""
        )
          v-list-item-avatar
            v-img(:src="`http://i.pravatar.cc/${60 + i}`")

          v-list-item-content
            v-list-item-title(v-html="item.name")
            v-list-item-subtitle(v-html="item.body")
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
