<template>
  <div>
    <section
      class="search-container container top-[0] z-50 w-[568px] max-w-[86vw] transition-opacity duration-100 focus-within:opacity-100"
    >
      <div
        class="border-opacity-10 bg-opacity-60 search-box flex h-[52px] items-center rounded-[12px] border-[1px] border-solid border-color-white transition-colors duration-100 focus-within:bg-opacity-80 focus-within:!opacity-100 dark:focus-within:bg-opacity-70 w-full"
        :class="isFocus && 'search-box-active'"
      >
        <div class="current flex h-full w-[52px] items-center justify-center">
          <div
            class="icon-box flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-[8px] bg-opacity-80 hover:bg-color-white hover:bg-opacity-80"
            @click="showTypeList = !showTypeList"
            ref="typeDom"
          >
            <section
              class="hi-icon flex items-center justify-center overflow-hidden bg-cover h-[24px] w-[24px] rounded-[6px]"
              style="background-color: rgba(0, 0, 0, 0)"
              :style="{
                'background-image': `url(${homeSearchStore.selectedSearch.icon})`
              }"
            >
              <!---->
            </section>
          </div>
        </div>
        <input
          class="search-input h-full w-full"
          placeholder="输入搜索内容"
          v-model="homeSearchStore.searchVal"
          @focus="isFocus = true"
          @blur="isFocus = false"
          @keydown.enter="onSearch"
        />
        <span
          class="icon-control flex items-center text-invert cursor-pointer"
          data-dia="search"
          @click="handleClose"
          v-if="homeSearchStore.searchVal"
        >
          <SvgIcon
            icon-class="close"
            fill="currentColor"
            stroke="none"
            width="0.8rem"
            height="0.8rem"
          />
        </span>
      </div>
      <section
        class="search-list rounded-[12px] border-[1px] border-solid mt-5 p-[20px] w-[568px] max-w-[86vw] z-50"
        :class="!showTypeList && 'hidden'"
      >
        <div class="wrapper text-[12px]" data-v-7ac19e27="">
          <ul
            class="relative grid grid-cols-[repeat(auto-fill,48px)] gap-[20px]"
          >
            <li
              class="search-drop flex flex-col items-center"
              v-for="(item, index) in SearchTypeList"
              :key="index"
              @click="onSearchTypeChange(item)"
            >
              <div
                data-dragid="0c47016a8cd2d631bc618d4f3a741335"
                class="hi-icon group cursor-pointer icon search-drag relative flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-color-white bg-opacity-80 transition-colors hover:bg-opacity-100 dark:bg-opacity-[0.06] dark:hover:bg-opacity-20"
              >
                <section
                  class="hi-close flex h-[24px] w-[24px] items-center justify-center rounded-[50%] bg-color-b4 shadow-close-btn transition-opacity absolute top-[-8px] left-[-8px] h-[20px] w-[20px] cursor-default opacity-0 group-hover:opacity-100"
                >
                  <i
                    class="iconfont icon-close_icon text-[12px] text-color-t4 transition-[transform,color] duration-300"
                  ></i>
                </section>
                <section
                  class="flex items-center justify-center overflow-hidden bg-cover h-[24px] w-[24px] rounded-[6px]"
                  style="background-color: rgba(0, 0, 0, 0)"
                  :style="{
                    'background-image': `url(${item.icon})`
                  }"
                >
                  <!---->
                </section>
              </div>
              <div
                class="mt-[4px] w-[60px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-color-t3"
              >
                {{ item.name }}
              </div>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useHomeSearchStore, SearchTypeList } from '@/stores/homeSearch'
import SvgIcon from '@/components/SvgIcon/index.vue'

const homeSearchStore = useHomeSearchStore()

const isFocus = ref(false)
const showTypeList = ref(false)
const typeDom = ref<any>(null)

const onSearchTypeChange = (item: any) => {
  homeSearchStore.setSelectedSearch(item)
}

const onSearch = () => {
  window.open(
    `${homeSearchStore.selectedSearch.searchUrl}${homeSearchStore.searchVal}`
  )
}

const handleClose = () => {
  homeSearchStore.setSearchVal('')
}

onMounted(() => {
  document.addEventListener('click', e => {
    if (typeDom.value) {
      const isSelf = typeDom.value.contains(e.target)
      if (!isSelf) {
        showTypeList.value = false
      }
    }
  })
})
</script>

<style lang="scss" scoped>
.search-container {
  margin: 0 auto;
  overflow: hidden;
}

.search-input {
  background: transparent;
}

.icon-box {
  transition: all ease 0.5s;
}

.hi-icon {
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 15px 3px #eee;
}

.hi-icon:hover {
  background-color: #fff !important;
  transition: all ease 0.5s;
}

.icon-box:hover {
  background-color: #fff;
  transition: all ease 0.5s;
}

.search-box {
  position: relative;
  backdrop-filter: blur(40px);
  box-shadow: 0 4px 16px -4px #0000000d;
  background-color: rgba(255, 255, 255, 0.8);
  padding-right: 18px;
}

.search-box-active {
  background-color: rgba(255, 255, 255);
}

.search-list {
  position: absolute;
  backdrop-filter: blur(40px);
  box-shadow: 0 4px 16px -4px #0000000d;
  background-color: rgba(255, 255, 255, 0.8);
  transition: all ease 1s;
}
</style>
