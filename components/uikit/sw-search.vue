<template lang="pug">
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
    template(v-slot:append="")
      transition(name="fade")
        v-icon(
          v-if="isAbsoluteSearch || searchQuery"
          @click="searchQuery = ''; showSearch = false"
          ) mdi-close
</template>

<script>
export default {
  data: () => ({
    showSearch: false,
    searchQuery: ''
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
  methods: {
    hideSearchInput () {
      if (!this.searchQuery) {
        this.showSearch = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
