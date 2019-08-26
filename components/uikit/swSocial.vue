<template lang="pug">
div
  v-btn.ml-1(
    v-for="item in items"
    :key="item.name"
    :color="item.color"
    dark
    fab
    small
    depressed
    :href="item.url"
    )
    v-icon {{ item.icon }}
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: 'vk',
        icon: 'mdi-vk',
        color: 'orange',
        url: 'https://vk.com'
      },
      {
        name: 'facebook',
        icon: 'mdi-facebook',
        color: 'indigo',
        url: 'https://facebook.com'
      },
      {
        name: 'twitter',
        icon: 'mdi-twitter',
        color: 'light-blue',
        url: 'https://twitter.com'
      }
    ]
  })
}
</script>
