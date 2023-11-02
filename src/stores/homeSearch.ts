import { defineStore } from 'pinia'

export enum SearchEnum {
  BAIDU = '百度',
  GOOGLE = '谷歌',
  BING = '必应'
}

export const SearchTypeList = [
  {
    name: SearchEnum.BAIDU,
    icon: 'https://infinity-permanent.infinitynewtab.com/infinity/search-add/baidu.png?imageMogr2/thumbnail/48x/format/webp/blur/1x0/quality/100|imageslim',
    searchUrl: 'https://www.baidu.com/s?tn=44004473_8_oem_dg&ie=utf-8&wd='
  },
  {
    name: SearchEnum.GOOGLE,
    icon: 'https://infinity-permanent.infinitynewtab.com/infinity/search-add/google.png?imageMogr2/thumbnail/48x/format/webp/blur/1x0/quality/100|imageslim',
    searchUrl: 'https://www.google.com/search?q='
  },
  {
    name: SearchEnum.BING,
    icon: 'https://infinity-permanent.infinitynewtab.com/infinity/search-add/bing_new.png?imageMogr2/thumbnail/48x/format/webp/blur/1x0/quality/100|imageslim',
    searchUrl: 'https://cn.bing.com/search?q='
  }
]

export const useHomeSearchStore = defineStore({
  // id is the name of the store
  // it is used in devtools and allows restoring state
  id: 'homeSearchStore',
  state: () => ({
    searchVal: '',
    selectedSearch: SearchTypeList[0],
    associateList: []
  }),
  getters: {},
  actions: {
    /** Fetching the pre-built lunr search index. */
    /**
     * Handle the opening and closing of search modal.
     * - Adding a modal--active class to force body to overflow
     * - Refocus the page to the parent element, for all key binding
     *   to work correctly.
     */
    setSearchVal(val: string) {
      this.searchVal = val
    },
    setSelectedSearch(val: any) {
      this.selectedSearch = val
    },
    setAssociateList(val: any) {
      this.associateList = val
    }
  }
})
