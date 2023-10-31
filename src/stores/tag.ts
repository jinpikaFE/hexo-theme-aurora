import { Tags } from '@/models/Post.class'
import { defineStore } from 'pinia'

export const useTagStore = defineStore({
  // id is the name of the store
  // it is used in devtools and allows restoring state
  id: 'tagStore',
  state: () => ({
    isLoaded: false,
    tags: new Tags().data
  }),
  getters: {},
  actions: {
    async fetchAllTags() {
      return new Promise(resolve => {
        this.tags = new Tags().data
        resolve(this.tags)
      })
    },
    async fetchTagsByCount() {
      this.isLoaded = false
      return new Promise(resolve => {
        this.isLoaded = true
        this.tags = new Tags().data
        resolve(this.tags)
      })
    }
  }
})
