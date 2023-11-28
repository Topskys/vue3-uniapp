<script setup lang="ts">
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import HotPanel from './components/HotPanel.vue';
import CustomNavbar from './components/CustomNavbar.vue';
import CategoryPanel from './components/CategoryPanel.vue';
import type { XtsGuessInstance } from '@/types/components';
import PageSkeleton from './components/PageSkeleton.vue';
import type { BannerItem, CategoryItem, HotItem } from '@/types/home';
import { getHomeBanner, getHomeCategory, getHomeHot } from '@/services/home';
import { useGuessList } from '@/composables';



// 定义变量
const banners = ref<BannerItem[]>([]);
const categories = ref<CategoryItem[]>([]);
const hots = ref<HotItem[]>([]);
const refresherTriggered = ref(false); // refresh状态
const isLoading = ref(false); // 是否正在加载中，是则显示骨架屏组件


// 获取数据函数
const getHomeBannerData = async () => {
  const res = await getHomeBanner();
  banners.value = res.result;
}

const getHomeCategoryData = async () => {
  const res = await getHomeCategory();
  categories.value = res.result;
}

const getHomeHotData = async () => {
  const res = await getHomeHot();
  hots.value = res.result;
}


// 滚动触底分页
const { guessRef, onScrolltolower } = useGuessList();


/**
 * 下拉刷新数据
 */
const onRefresh = async () => {
  refresherTriggered.value = true;
  // 刷新重置猜你喜欢的数据
  guessRef.value?.resetData();
  // 调用获取数据函数
  // await getHomeBannerData();
  // await getHomeCategoryData();
  // await getHomeHotData();
  // 调优（只等一次）
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData(), guessRef.value?.getMore()]);
  // 刷新完成
  refresherTriggered.value = false;
}


// 周期函数
onLoad(async () => {
  // 发起请求
  isLoading.value = true;
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
  ])
  isLoading.value = false;
})
</script>

<template>
  <!-- navbar -->
  <CustomNavbar />
  <!-- scroll -->
  <scroll-view scroll-y refresher-enabled :refresher-triggered="refresherTriggered" class="scroll-view"
    @scrolltolower="onScrolltolower" @refresherrefresh="onRefresh">
    <!-- skeleton -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- carousel -->
      <XtsSwiper :banners="banners" />
      <!-- CategoryPanel -->
      <CategoryPanel :categories="categories" />
      <!-- HotPanel -->
      <HotPanel :hots="hots" />
      <!-- XtsGuess -->
      <XtsGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
// page为程序根标签 
/* #ifdef APP-PLUS */
#app,
/* #endif */ 
page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
}

.scroll-view {
  flex: 1;
}
</style>
