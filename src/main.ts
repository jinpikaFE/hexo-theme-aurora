import { createApp } from 'vue'
// Vuex is replaced with Pinia see@https://github.com/posva/pinia
// Pinia has a much better TypeScript support,
// also it's a much simpler State Management setup
import { createPinia } from 'pinia'

import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import i18n from './locales'
import VueClickAway from 'vue3-click-away'
import VueLazyLoad from 'vue3-lazyload'

import './router/guard' // router guards

import 'virtual:svg-icons-register'
import { registerObSkeleton } from '@/components/LoadingSkeleton'
import { registerScrollSpy } from 'vue3-scroll-spy'
import defaultCover from '@/assets/default-cover.jpg'
import webSee from '@websee/core'
import recordscreen from '@websee/recordscreen'

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(i18n)
  .use(VueClickAway)
  .use(VueLazyLoad, {
    loading: defaultCover,
    error: defaultCover
  })

if (import.meta.env.MODE !== 'development') {
  app.use(webSee, {
    dsn: `${import.meta.env.VITE_MONITOR_URL}/v1/mgb/monitor`,
    apikey: import.meta.env.VITE_APP_NAME,
    userId: import.meta.env.VITE_APP_NAME
  })
  webSee.use(recordscreen)
}

registerObSkeleton(app)
registerScrollSpy(app)

app.mount('#app')

console.log(
  '%c Aurora is developed by Benny Guo (三钻)%c',
  'background:#24272A; color:#73ddd7',
  '',
  'https://github.com/auroral-ui/hexo-theme-aurora'
)
