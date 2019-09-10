<template lang="pug">
  .sw-loading(v-if="loading" :class="loadingClass")
    v-progress-circular(:size="size" :color="color" indeterminate)
</template>

<script>
export default {
  name: 'TheLoading',
  props: {
    loading: { type: Boolean, default: false },
    loadingClass: { type: String, default: 'text-xs-center' },
    color: { type: String, default: 'primary' },
    size: { type: Number, default: 50 }
  }
}
</script>

<style lang="scss" scoped>
.sw-loading {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
