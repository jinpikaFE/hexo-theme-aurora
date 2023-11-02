<template>
  <div class="block mt-8">
    <HomeSearch />
    <section class="mt-5">
      <p class="top-tag mb-3 flex items-center">
        <svg
          t="1698895242800"
          class="icon mr-1"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2324"
          width="20"
          height="20"
        >
          <path
            d="M423.477333 938.666667S45.045333 855.424 214.186667 442.282667c0 0 38.4 45.909333 33.12 68 0 0 30.101333-104.277333 95.072-166.570667C398.165333 290.186667 454.848 139.712 402.570667 85.333333c0 0 258.933333 54.378667 287.754666 326.378667 0 0 33.12-86.666667 101.12-95.232 0 0-20.906667 47.616 0 119.04 0 0 214.485333 367.146667-155.157333 491.242667 0 0 110.805333-125.813333-124.181333-341.717334 0 0-55.402667 115.626667-88.533334 156.373334-0.096 0.106667-92.522667 103.722667-0.096 197.248z"
            fill="#ffffff"
            p-id="12454"
          ></path>
        </svg>
        热门工具
      </p>
      <ul class="grid lg:grid-cols-6 gap-7">
        <li v-for="n in 12" :key="n">
          <ArticleCard :data="{}" />
        </li>
      </ul>
    </section>
    <section>
      <p class="top-tag my-3 flex items-center">
        <svg
          t="1698895242800"
          class="icon mr-1"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2324"
          width="20"
          height="20"
        >
          <path
            d="M1006.762667 443.682133l-129.0752 324.488533-109.806933 0c4.864-39.645867 12.151467-91.886933 21.8624-156.740267-10.5472 28.535467-22.186667 57.309867-34.9696 86.3232l-30.3616 70.417067-110.062933 0 45.806933-324.488533 87.1936 0c-1.655467 8.482133-11.2128 70.417067-28.689067 185.838933 4.352-11.8784 28.859733-73.8304 73.5232-185.838933l83.7632 0L845.653333 629.504c18.0736-54.272 42.734933-116.206933 74.001067-185.838933L1006.762667 443.665067zM608.768 603.8016l-138.666667 0-20.309333 78.4384c-4.2496 16.401067-5.8368 26.965333-4.7616 31.709867 1.0752 4.744533 4.881067 7.099733 11.4176 7.099733 8.123733 0 14.370133-3.140267 18.7392-9.4208 4.369067-6.280533 8.891733-18.449067 13.550933-36.488533l12.3904-47.8208 101.546667 0-6.929067 26.7776c-5.802667 22.408533-11.6224 39.6288-17.476267 51.6608-5.853867 12.032-15.581867 24.866133-29.201067 38.536533-13.6192 13.6704-29.0304 23.9104-46.267733 30.737067-17.237333 6.826667-37.512533 10.257067-60.842667 10.257067-22.6304 0-41.728-3.3792-57.309867-10.103467-15.581867-6.741333-26.658133-15.991467-33.245867-27.733333-6.587733-11.758933-9.915733-24.695467-9.966933-38.8096-0.0512-14.114133 3.413333-34.6624 10.3936-61.627733l27.374933-105.762133c8.209067-31.709867 18.8416-56.712533 31.880533-75.025067 13.038933-18.312533 30.293333-32.341333 51.729067-42.0864 21.435733-9.745067 44.4416-14.626133 69.000533-14.626133 30.0544 0 53.316267 5.870933 69.802667 17.629867 16.4864 11.758933 26.146133 27.323733 28.996267 46.728533 2.833067 19.4048-0.290133 46.6944-9.386667 81.851733L608.768 603.8016zM520.209067 473.719467c-7.424 0-12.629333 2.321067-15.581867 6.9632-2.9696 4.642133-7.099733 17.169067-12.373333 37.5808L485.376 544.768l31.2832 0 6.8608-26.504533c4.864-18.773333 7.0144-30.890667 6.485333-36.352C529.493333 476.450133 526.216533 473.719467 520.209067 473.719467zM431.342933 400.503467c-23.6032 10.376533-42.5984 25.2928-56.951467 44.782933-14.370133 19.490133-26.077867 46.08-35.106133 79.8208l-30.1568 112.5376c-7.68 28.689067-11.502933 50.551467-11.434667 65.570133 0.068267 15.018667 3.720533 28.791467 10.973867 41.284267 7.253333 12.509867 19.456 22.340267 36.608 29.508267 0.7168 0.290133 1.536 0.494933 2.2528 0.785067l-2.884267 10.496-128.529067 0-7.867733-248.4736L139.844267 785.271467 17.237333 785.271467l150.493867-546.56 122.606933 0 14.4384 246.101333 67.771733-246.101333 122.606933 0-42.427733 154.112C445.457067 394.990933 438.289067 397.448533 431.342933 400.503467z"
            fill="#ffffff"
            p-id="11221"
          ></path>
        </svg>
        最新工具
      </p>
      <ul class="grid lg:grid-cols-6 gap-7">
        <li v-for="n in 12" :key="n">
          <ArticleCard :data="{}" />
        </li>
      </ul>
    </section>
    <Feature v-if="themeConfig.theme.feature" :data="topFeature">
      <FeatureList :data="featurePosts" />
    </Feature>
    <!-- <template v-else>
      <horizontal-article class="mb-8" :data="posts.data[0] || {}" />
    </template>
    <div class="main-grid" id="article-list">
      <div class="flex flex-col relative">
        <ul :class="tabClass">
          <li
            :class="{ active: activeTab === '' }"
            @click="handleTabChange('')"
          >
            <span class="first-tab" :style="activeTabStyle('')">
              {{ t('settings.button-all') }}
            </span>
          </li>
          <template v-if="categories && categories.length > 0">
            <li
              v-for="category in categories"
              :key="category.slug"
              :class="{ active: activeTab === category.slug }"
              @click="handleTabChange(category.slug)"
            >
              <span :style="activeTabStyle(category.slug)">
                {{ category.name }}
              </span>
              <b>
                {{ category.count }}
              </b>
            </li>
          </template>
          <template v-else-if="categories !== null">
            <li v-for="i in 6" :key="i" style="position: relative; top: -4px">
              <ob-skeleton tag="span" width="60px" height="33px" />
            </li>
          </template>
        </ul>

        <span :class="expanderClass" @click="expandHandler">
          <SvgIcon
            icon-class="chevron"
            height="1.2rem"
            width="1.2rem"
            fill="var(--text-normal)"
            stroke="var(--text-normal)"
          />
        </span>

        <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <template v-if="posts.data.length === 0">
            <li v-for="n in 6" :key="n">
              <ArticleCard :data="{}" />
            </li>
          </template>

          <template v-else-if="!themeConfig.theme.feature">
            <template v-for="(post, key) in posts.data" :key="post.slug">
              <li v-if="key !== 0">
                <ArticleCard :data="post" />
              </li>
            </template>
          </template>

          <template v-else>
            <li v-for="post in posts.data" :key="post.slug">
              <ArticleCard :data="post" />
            </li>
          </template>
        </ul>

        <Paginator
          :pageSize="pagination.pageSize"
          :pageTotal="pagination.pageTotal"
          :page="pagination.page"
          @pageChange="pageChangeHanlder"
        />
      </div>
      <div>
        <Sidebar>
          <Profile author="blog-author" />
          <RecentComment />
          <Sticky
            :stickyTop="32 + 63"
            :endingElId="endEleId"
            dynamicElClass="#sticky-tag-box"
          >
            <TagBox />
          </Sticky>
        </Sidebar>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { Feature, FeatureList } from '@/components/Feature'
import { usePostStore } from '@/stores/post'
import { FeaturePosts, PostList } from '@/models/Post.class'
import { useAppStore } from '@/stores/app'
import { useI18n } from 'vue-i18n'
import { useCategoryStore } from '@/stores/category'
import { useMetaStore } from '@/stores/meta'
import usePageTitle from '@/hooks/usePageTitle'
import { HomeSearch } from '@/components/HomeSearch'
import { ArticleCard } from '@/components/ArticleCard'

export default defineComponent({
  name: 'ARHome',
  components: {
    Feature,
    FeatureList,
    HomeSearch,
    ArticleCard
  },
  setup() {
    useMetaStore().setTitle('home')
    const postStore = usePostStore()
    const appStore = useAppStore()
    const categoryStore = useCategoryStore()
    const { updateTitleByText } = usePageTitle()
    const { t } = useI18n()

    /** Variables Section */

    const topFeature = ref(new FeaturePosts().top_feature)
    const featurePosts = ref(new FeaturePosts().features)
    const posts = ref(new PostList())
    const expanderClass = ref({
      'tab-expander': true,
      expanded: false
    })
    const tabClass = ref({
      tab: true,
      'expanded-tab': false
    })
    const activeTab = ref('')
    const articleOffset = ref(0)
    const pagination = ref({
      pageSize: 12,
      pageTotal: 0,
      page: 1
    })

    /** Function section */

    const fetchData = async () => {
      await postStore.fetchFeaturePosts().then(() => {
        topFeature.value = postStore.featurePosts.top_feature
        featurePosts.value = postStore.featurePosts.features
      })

      await fetchPostData()
      await categoryStore.fetchCategories()
      updateTitleByText(appStore.themeConfig.site.subtitle)

      const articleListEl = document.getElementById('article-list')
      // 150 is the height of the header element
      articleOffset.value =
        articleListEl && articleListEl instanceof HTMLElement
          ? articleListEl.offsetTop
          : 0
    }

    onMounted(fetchData)

    const expandHandler = () => {
      expanderClass.value.expanded = !expanderClass.value.expanded
      tabClass.value['expanded-tab'] = !tabClass.value['expanded-tab']
    }

    const handleTabChange = (slug: string) => {
      activeTab.value = slug
      backToArticleTop()
      if (slug !== '') {
        posts.value = new PostList()
        postStore.fetchPostsByCategory().then(postList => {
          posts.value = postList
          pagination.value.pageTotal = postList.total
        })
      } else {
        fetchPostData()
      }
    }

    const backToArticleTop = () => {
      window.scrollTo({
        top: articleOffset.value,
        behavior: 'smooth'
      })
    }

    const activeTabStyle = (slug: string) => {
      if (slug === activeTab.value)
        return { background: appStore.themeConfig.theme.header_gradient_css }
      return {}
    }

    const fetchPostData = async () => {
      posts.value = new PostList()
      await postStore.fetchPostsList(pagination.value.page).then(() => {
        posts.value = postStore.posts
        pagination.value.pageTotal = postStore.posts.total
        pagination.value.pageSize = postStore.posts.pageSize
      })
    }

    const pageChangeHanlder = async (page: number) => {
      pagination.value.page = page
      backToArticleTop()
      await fetchPostData()
    }

    return {
      endEleId: computed(() =>
        appStore.themeConfig.footerLinks.data.length > 0
          ? 'footer-link'
          : 'footer'
      ),
      gradientText: computed(
        () => appStore.themeConfig.theme.background_gradient_style
      ),
      gradientBackground: computed(() => {
        return { background: appStore.themeConfig.theme.header_gradient_css }
      }),
      themeConfig: computed(() => appStore.themeConfig),
      categories: computed(() => {
        if (categoryStore.isLoaded && categoryStore.categories.length === 0) {
          return null
        }
        return categoryStore.categories
      }),
      expanderClass,
      tabClass,
      expandHandler,
      handleTabChange,
      topFeature,
      featurePosts,
      posts,
      activeTabStyle,
      activeTab,
      pagination,
      pageChangeHanlder,
      t
    }
  }
})
</script>

<style lang="scss" scoped>
.top-tag {
  background: linear-gradient(
    130deg,
    rgba(36, 198, 220) 41.07%,
    rgba(84, 51, 255, 0.6) 100%
  );
  opacity: 0.8;
  width: fit-content;
  padding: 1px 16px;
  border-radius: 32px;
  color: #fff;
}
</style>
