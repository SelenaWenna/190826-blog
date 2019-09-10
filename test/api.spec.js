import $axios from 'axios'

describe('API', () => {
  test('Posts come in right structure', async () => {
    const postsResp = await $axios.get('https://jsonplaceholder.typicode.com/posts')
    const posts = postsResp.data
    expect(posts.length).toBeTruthy()
    expect(posts[0].id).toBeDefined()
    expect(posts[0].title).toBeDefined()
    expect(posts[0].body).toBeDefined()
  })

  test('Comments come in right structure', async () => {
    const commentsResp = await $axios.get('https://jsonplaceholder.typicode.com/comments')
    const comments = commentsResp.data
    expect(comments.length).toBeTruthy()
    expect(comments[0].id).toBeDefined()
    expect(comments[0].postId).toBeDefined()
    expect(comments[0].body).toBeDefined()
    expect(comments[0].name).toBeDefined()
    expect(comments[0].email).toBeDefined()
  })
})
