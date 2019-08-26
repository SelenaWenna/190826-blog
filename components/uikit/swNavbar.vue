<template lang="pug">
v-toolbar(dense)
  v-toolbar-items
    v-btn.sw-navbar__link(
      v-for="item in items"
      :key="key"
      :color="item.color"
      dark
      ) {{ item.title }}
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Home',
        color: 'light-blue',
        url: '/'
      },
      {
        title: 'Cinema',
        color: 'light-green',
        url: '/'
      },
      {
        title: 'Magazine',
        color: 'red',
        url: '/'
      },
      {
        title: 'Archives',
        color: 'indigo',
        url: '/'
      },
      {
        title: 'Contact us',
        color: 'orange',
        url: '/'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-toolbar__content {
    padding-right: 0;
    padding-left: 0;
  }
  .v-toolbar-items {
    width: 100%;
  }
}
.sw-navbar__link {
  flex: 1 1 auto;
}
</style>
