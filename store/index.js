import { categories } from '@/utils/sw-constants.js'
import { upperFirst } from '@/utils/sw-string.js'

export const state = () => ({
  posts: []
})

export const getters = {
  getPosts: state => ({ min = 0, max }) => {
    if (max) {
      return state.posts.slice(min, max)
    }
    return state.posts.slice(min)
  },
  getPost: state => ({ id }) => {
    if (id) {
      return state.posts.find(post => post.id === id) || {}
    }
    return {}
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
      state.posts[i].comments = comments.data
        .filter(comment => state.posts[i].id === comment.postId)
        .map((comment) => {
          comment.name = upperFirst(comment.name)
          comment.body = upperFirst(comment.body)
          return comment
        })
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

    return resp
  }
}
