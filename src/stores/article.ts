import { defineStore } from 'pinia'
import { Link, Page } from '@/models/Article.class'

export const useArticleStore = defineStore({
  // id is the name of the store
  // it is used in devtools and allows restoring state
  id: 'articleStore',
  state: () => ({}),
  getters: {},
  actions: {
    async fetchArticle(): Promise<Page<Link[] | Record<string, Link[]>>> {
      return new Promise(resolve =>
        setTimeout(() => {
          resolve(new Page())
        }, 200)
      )
    }
  }
})
