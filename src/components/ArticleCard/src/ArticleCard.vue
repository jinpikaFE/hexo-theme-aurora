<template>
  <li class="article-container" @click="handleCardClick">
    <div class="article">
      <div class="article-thumbnail">
        <img v-if="post.img" v-lazy="post.img" alt="" />
        <img v-else src="@/assets/default-cover.jpg" />
        <span class="thumbnail-screen" :style="gradientBackground" />
      </div>
      <div class="article-content">
        <div class="article-footer" v-if="post.img">
          <div class="flex flex-row items-center">
            <img :class="avatarClasses" :src="post.img" />
            <span class="text-ob-dim">
              <strong
                class="text-ob-normal pr-1.5 hover:text-ob hover:opacity-50 cursor-pointer"
              >
                {{ post.name }}
              </strong>
            </span>
          </div>
        </div>
        <div class="article-footer" v-else>
          <div class="flex flex-row items-center mt-6">
            <ob-skeleton
              class="mr-2"
              height="28px"
              width="28px"
              :circle="true"
            />
            <span class="text-ob-dim mt-1">
              <ob-skeleton height="20px" />
            </span>
          </div>
        </div>
        <h6 data-dia="article-link" v-if="post.desc">{{ post.desc }}</h6>
        <ob-skeleton v-else tag="h1" height="3rem" />
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { useAppStore } from '@/stores/app'
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ARArticleCard',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const appStore = useAppStore()
    const { t } = useI18n()

    const handleAuthorClick = (link: string) => {
      if (link === '') link = window.location.href
      window.location.href = link
    }

    const navigateToTag = (slug: string) => {
      router.push({ name: 'post-search', query: { tag: slug } })
    }

    const navigateToCategory = (slug: string) => {
      router.push({ name: 'post-search', query: { category: slug } })
    }

    const handleCardClick = () => {
      window.open(props.data.url)
    }

    return {
      avatarClasses: computed(() => ({
        'hover:opacity-50 cursor-pointer': true,
        [appStore.themeConfig.theme.profile_shape]: true
      })),
      gradientBackground: computed(() => {
        return { background: appStore.themeConfig.theme.header_gradient_css }
      }),
      post: computed(() => props.data),
      navigateToTag,
      navigateToCategory,
      handleAuthorClick,
      handleCardClick,
      t
    }
  }
})
</script>

<style lang="scss" scoped>
.feature-sign {
  width: calc(100% - 0.5rem);
  height: calc(100% - 0.5rem);
  margin: 0.25rem;
}
</style>
