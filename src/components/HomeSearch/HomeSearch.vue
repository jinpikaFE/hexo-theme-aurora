<template>
  <section
    class="search-container container top-[0] z-50 w-[568px] max-w-[86vw] transition-opacity duration-100 focus-within:opacity-100"
  >
    <div
      class="border-opacity-10 bg-opacity-60 search-box flex h-[52px] items-center rounded-[12px] border-[1px] border-solid border-color-white transition-colors duration-100 focus-within:bg-opacity-80 focus-within:!opacity-100 dark:focus-within:bg-opacity-70 w-full"
    >
      <div class="current flex h-full w-[52px] items-center justify-center">
        <div
          class="icon-box flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-[8px] bg-opacity-80 hover:bg-color-white hover:bg-opacity-80"
        >
          <section
            class="hi-icon flex items-center justify-center overflow-hidden bg-cover h-[24px] w-[24px] rounded-[6px]"
            style="
              background-color: rgba(0, 0, 0, 0);
              background-image: url('https://infinity-permanent.infinitynewtab.com/infinity/search-add/google.png?imageMogr2/thumbnail/48x/format/webp/blur/1x0/quality/100|imageslim');
            "
          >
            <!---->
          </section>
        </div>
      </div>
      <input
        class="search-input h-full w-full"
        placeholder="输入搜索内容"
        v-model="searchVal"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const searchVal = ref('')
</script>

<style lang="scss" scoped>
.search-container {
  margin: 0 auto;
  overflow: hidden;
}

.search-input {
  background: transparent;
}

.search-box {
  backdrop-filter: blur(40px);
  box-shadow: 0 4px 16px -4px #0000000d;
  background-color: rgba(255, 255, 255, 0.8);
  padding-right: 10px;
}
</style>
