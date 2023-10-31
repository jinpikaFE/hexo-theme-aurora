<template>
  <div class="inverted-main-grid py-7 gap-7 box-border">
    <div
      class="relative overflow-hidden rounded-2xl bg-ob-deep-800 shadow-lg custom-box"
    >
      <div
        class="ob-gradient-plate opacity-90 relative z-10 bg-ob-deep-900 rounded-2xl px-6 py-6 shadow-md custom-container"
      >
        <h2 class="text-1xl">
          <a
            v-for="item in dataList"
            :key="item.key"
            :href="item.href"
            @click.prevent="onAnchoreClick(item)"
          >
            <p
              class="a-item"
              :class="item.key === activeAnchor && 'a-item-active'"
            >
              <img class="img-box" v-if="item.img" :src="item.img" />
              <span :style="gradientText">
                {{ item.title }}
              </span>
            </p>
          </a>
        </h2>
      </div>
      <span
        class="absolute top-0 w-full h-full z-0"
        :style="gradientBackground"
      />
    </div>

    <div>
      <ul v-for="item in dataList" :key="item.key" :id="item.key">
        <p class="flex items-center">
          <img class="img-box" v-if="item.img" :src="item.img" />
          {{ item.title }}
        </p>
        <ul class="grid lg:grid-cols-4 gap-7">
          <template v-if="item.settingWebUrls.length > 0">
            <li v-for="post in item.settingWebUrls" :key="post.id">
              <ArticleCard :data="post" />
            </li>
          </template>
          <template v-else>
            <li v-for="n in 12" :key="n">
              <ArticleCard :data="{}" />
            </li>
          </template>
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
  ref,
  onMounted,
  onUnmounted
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
    const activeAnchor = ref<number>()

    onMounted(() => {
      window.addEventListener('scroll', highlightActiveSection)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', highlightActiveSection)
    })

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

    const onAnchoreClick = (item: any) => {
      activeAnchor.value = item?.key
      const element = document.getElementById(item?.key)

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const highlightActiveSection = () => {
      const scrollPosition = window.scrollY
      for (const section of dataList.value) {
        const element = document.getElementById(section.key)
        if (element) {
          const sectionTop = element.offsetTop
          const sectionBottom = sectionTop + element.clientHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeAnchor.value = section.key
          }
        }
      }
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
      dataList,
      activeAnchor,
      onAnchoreClick
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

.a-item {
  display: flex;
  align-items: center;
  padding: 4px 12px;
  margin: 4px 0;
  &:hover {
    background: linear-gradient(
      130deg,
      rgba(36, 198, 220, 0.1),
      rgba(84, 51, 255, 0.1) 41.07%,
      rgba(255, 0, 153, 0.1) 76.05%
    );
    border-radius: 4px;
    cursor: pointer;
  }

  &-active {
    background: linear-gradient(
      130deg,
      rgba(36, 198, 220, 0.1),
      rgba(84, 51, 255, 0.1) 41.07%,
      rgba(255, 0, 153, 0.1) 76.05%
    );
    border-radius: 4px;
  }
}

.img-box {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

a:hover {
  opacity: 1;
}

@media (max-width: 1024px) {
  .custom-box {
    display: none;
  }
}
</style>
