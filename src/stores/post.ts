import { defineStore } from 'pinia'
import {
  Archives,
  FeaturePosts,
  Post,
  PostList,
  SpecificPostsList
} from '@/models/Post.class'

export const usePostStore = defineStore({
  // id is the name of the store
  // it is used in devtools and allows restoring state
  id: 'postStore',
  state: () => ({
    featurePosts: new FeaturePosts(),
    posts: new PostList(),
    postTotal: 0,
    cachePost: {
      title: '',
      body: '',
      uid: ''
    }
  }),
  getters: {},
  actions: {
    async fetchFeaturePosts() {
      return new Promise(resolve =>
        setTimeout(() => {
          this.featurePosts = new FeaturePosts()
          resolve(this.featurePosts)
        }, 200)
      )
    },
    async fetchPostsList(page?: number): Promise<PostList> {
      if (!page) page = 1
      return new Promise(resolve =>
        setTimeout(() => {
          this.posts = new PostList()
          this.postTotal = this.posts.total
          resolve(this.posts)
        }, 200)
      )
    },
    async fetchArchives(page?: number): Promise<Archives> {
      if (!page) page = 1
      return new Promise(resolve =>
        setTimeout(() => {
          resolve(new Archives())
        }, 200)
      )
    },
    async fetchPost(): Promise<Post> {
      return new Promise(resolve =>
        setTimeout(() => {
          resolve(new Post())
        }, 200)
      )
    },
    async fetchPostsByCategory(): Promise<SpecificPostsList> {
      return new Promise(resolve =>
        setTimeout(() => {
          resolve(new SpecificPostsList())
        }, 200)
      )
    },
    async fetchPostsByTag(): Promise<SpecificPostsList> {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(new SpecificPostsList())
        }, 200)
      })
    },
    /**
     * Setting the cache post data
     * @param data Cache data
     */
    setCache(data: { title: string; body: string; uid: string }) {
      this.cachePost = data
    }
  }
})
