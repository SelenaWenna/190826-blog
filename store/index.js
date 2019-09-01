import { categories } from '@/utils/constants'
import { upperFirst } from '@/utils/stringUtils'

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
    state.posts = posts.data
    const max = categories.length

    for (let i = 0; i < state.posts.length; i++) {
      const rand = Math.random() * max
      const category = categories[Math.floor(rand)]
      const imageNumbers = [1, 2, 3, 4, 5]

      state.posts[i].date = new Date()
      state.posts[i].category = category
      state.posts[i].title = upperFirst(state.posts[i].title)
      state.posts[i].body = upperFirst(state.posts[i].body)
      state.posts[i].comments = comments.data.slice(0, 10)
      state.posts[i].images = imageNumbers.map(n => `/img/${category}/${n}.jpg`)
    }
  }
}

export const actions = {
  async fetchPosts ({ commit }) {
    const resp = await Promise.all([
      this.$axios.get('https://jsonplaceholder.typicode.com/posts'),
      this.$axios.get('https://jsonplaceholder.typicode.com/comments')
    ])
    commit('setPosts', resp)
  }
}
