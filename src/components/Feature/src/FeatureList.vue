<template>
  <div class="inverted-main-grid py-7 gap-7 box-border">
    <div
      class="relative overflow-hidden rounded-2xl bg-ob-deep-800 shadow-lg custom-box"
    >
      <div
        class="ob-gradient-plate opacity-90 relative z-10 bg-ob-deep-900 rounded-2xl px-6 py-6 shadow-md custom-container"
      >
        <h2 class="text-1xl">
          <p :style="gradientText" v-for="item in dataList" :key="item.key">
            <a :href="item.href">
              {{ item.title }}
            </a>
          </p>
        </h2>
      </div>
      <span
        class="absolute top-0 w-full h-full z-0"
        :style="gradientBackground"
      />
    </div>

    <div>
      <ul v-for="item in dataList" :key="item.key">
        <p>{{ item.title }}</p>
        <ul class="grid lg:grid-cols-4 gap-7">
          <!-- <template v-if="dataList.length > 0">
        <li v-for="post in dataList" :key="post.id">
          <ArticleCard :data="post" />
        </li>
      </template>
      <template v-else>
        <li v-for="n in 12" :key="n">
          <ArticleCard :data="{}" />
        </li>
      </template> -->
          <li v-for="n in 4" :key="n">
            <ArticleCard :data="{}" />
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { useAppStore } from '@/stores/app'
import { useI18n } from 'vue-i18n'
import {
  PropType,
  StyleValue,
  computed,
  defineComponent,
  toRefs,
  ref
} from 'vue'
import { ArticleCard } from '@/components/ArticleCard'
import { Post } from '@/models/Post.class'
import { getSeetingSortTree } from '@/api'

export default defineComponent({
  name: 'ObFeatureList',
  components: {
    ArticleCard
  },
  props: {
    data: {
      type: Array as PropType<Post[]>,
      required: true
    }
  },
  setup(props) {
    const appStore = useAppStore()
    const featurePosts = toRefs(props).data
    const { t } = useI18n()
    const dataList: any = ref([])

    const transformData: any = (data: any[]) => {
      const filteredData = data
        .filter(item => item.status === 2)
        .sort((a, b) => b.sort - a.sort)

      const filteredSettingWebUrls = (webUrls: any[]) => {
        return webUrls
          .filter(item => item.status === 2)
          .sort((a, b) => b.sort - a.sort)
      }

      return filteredData.map(item => ({
        key: item.id,
        href: `#${item.id}`,
        title: item.name,
        img: item.img,
        children: item.children ? transformData(item.children) : [],
        settingWebUrls: filteredSettingWebUrls(item?.settingWebUrls)
      }))
    }

    const getData = async () => {
      const res = await getSeetingSortTree()
      dataList.value = transformData(res?.data)
      console.log(res)
    }

    getData()

    return {
      gradientBackground: computed(() => ({
        background: appStore.themeConfig.theme.header_gradient_css
      })),
      gradientText: computed(
        () => appStore.themeConfig.theme.background_gradient_style as StyleValue
      ),
      featurePosts,
      t,
      dataList
    }
  }
})
</script>

<style lang="scss" scoped>
.custom-box {
  height: fit-content;

  position: sticky;
  top: 80px;
  z-index: 10;
}

.custom-container {
  max-height: 80vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
}

@media (max-width: 1024px) {
  .custom-box {
    display: none;
  }
}
</style>
