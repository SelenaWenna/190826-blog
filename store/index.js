import { categories } from '@/assets/constants'

export const state = () => ({
  posts: []
})

export const getters = {
  getPosts: state => ({ min = 0, max }) => {
    return state.posts.slice(min, max)
  }
}

export const mutations = {
  setPosts (state, [ posts, comments ]) {
    console.log(posts); // eslint-disable-line

    state.posts = posts.data
    const max = categories.length

    for (let i = 0; i < state.posts.length; i++) {
      const rand = Math.random() * max
      const categoryIndex = Math.floor(rand)

      state.posts[i].category = categories[categoryIndex]
      state.posts[i].comments = comments.data.slice(0, 10)
    }
  }
}

export const actions = {
  async setPosts ({ commit }) {
    const resp = await Promise.all([
      this.$axios.get('https://jsonplaceholder.typicode.com/posts'),
      this.$axios.get('https://jsonplaceholder.typicode.com/comments')
    ])
    commit('setPosts', resp)
  }
}
