<template lang="pug">
div
  .sw-title.headline.light-blue--text Top stories
  v-carousel.mt-3(
    cycle
    height="500"
    interval="3000"
    hide-delimiters
    )
    v-carousel-item(
      v-for="item in items"
      :key="item.id"
    )
      v-sheet(
        height="400"
        :color="item.color"
        )
        //- .sw-title.pa-4 {{ item.category }}
        v-img(
          :src="`/img/swSwiper/${item.img}`"
          :alt="item.category"
          max-height="352"
          )
        .sw-title.pa-3 {{ item.category }}
      v-card-text(light color="white") {{ item.text }}
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        img: 'slide01.jpg',
        category: 'Cinema',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        color: 'light-blue'
      },
      {
        id: 2,
        img: 'slide03.jpg',
        category: 'Travel',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        color: 'pink'
      },
      {
        id: 3,
        img: 'slide02.jpg',
        category: 'Television',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        color: 'orange'
      },
      {
        id: 4,
        img: 'slide04.jpg',
        category: 'Fashion',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        color: 'light-green'
      },
      {
        id: 5,
        img: 'slide05.jpg',
        category: 'Travel',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        color: 'yellow'
      }
    ]
  })
}
</script>

<style scoped>
.sw-title {
  text-transform: uppercase;
}
</style>
