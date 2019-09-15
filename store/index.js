import Vue from 'vue'
import { categories } from '@/utils/sw-constants.js'
import { upperFirst } from '@/utils/sw-string.js'

export const state = () => ({
  posts: [],
  users: []
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
  },
  getUser: state => ({ email }) => state.users.find(user => user.email === email) || {}
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
      Vue.set(state.posts[i], 'comments', comments.data
        .filter(comment => state.posts[i].id === comment.postId)
        .map((comment) => {
          comment.name = upperFirst(comment.name)
          comment.body = upperFirst(comment.body)
          return comment
        }))
      state.posts[i].images = imageNumbers.map(n => `/img/${category}/${n}.jpg`)
    }
  },
  setUsers (state, comments) {
    for (let i = 0; i < comments.data.length; i++) {
      this.commit('addUser', comments.data[i].email)
    }
  },
  addUser (state, email) {
    if (!state.users.find(user => email === user.email)) {
      const userId = state.users.length + 1
      state.users.push({
        id: userId,
        email,
        avatar: `http://i.pravatar.cc/${60 + userId}`
      })
    }
  },
  addComment (state, newComment) {
    state.posts.find(post => post.id === newComment.postId).comments.push(newComment)
  }
}

export const actions = {
  async fetchPosts ({ commit }) {
    const resp = await Promise.all([
      this.$axios.get('https://jsonplaceholder.typicode.com/posts'),
      this.$axios.get('https://jsonplaceholder.typicode.com/comments')
    ])
    commit('setUsers', resp[1])
    commit('setPosts', resp)

    return resp
  },
  addComment ({ commit }, newComment) {
    commit('addUser', newComment.email)
    commit('addComment', newComment)
  }
}
