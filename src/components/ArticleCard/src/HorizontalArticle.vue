<template>
  <div class="article-container">
    <div class="feature-article">
      <div class="feature-thumbnail">
        <img class="ob-hz-thumbnail" src="@/assets/default-cover.jpg" />
        <span class="thumbnail-screen" :style="bannerHoverGradient" />
      </div>
      <!-- <div class="feature-content">广告位</div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useAppStore } from '@/stores/app'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'ObHorizontalArticle',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const appStore = useAppStore()
    const { t } = useI18n()

    return {
      bannerHoverGradient: computed(() => {
        return { background: appStore.themeConfig.theme.header_gradient_css }
      }),
      t
    }
  }
})
</script>
