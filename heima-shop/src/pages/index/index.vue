<script setup lang="ts">
import { ref } from 'vue';
import { onLoad, onPullDownRefresh } from '@dcloudio/uni-app';
import CustomNavbar from './components/CustomNavbar.vue';
import CategoryPanel from './components/CategoryPanel.vue';
import HotPanel from './components/HotPanel.vue';
import type { BannerItem, CategoryItem, HotItem } from '@/types/home';
import { getHomeBanner, getHomeCategory, getHomeHot } from '@/services/home';
import type { XtsGuessInstance } from '@/types/component';




// 定义变量
const banners = ref<BannerItem[]>([]);
const categories = ref<CategoryItem[]>([]);
const hots = ref<HotItem[]>([]);
const guessRef = ref<XtsGuessInstance>();
const refresherTriggered = ref(false); // refresh状态


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
const onScrolltolower = () => {
  // 调用猜你喜欢组件的方法
  guessRef.value?.getMore();
}

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
onLoad(() => {
  // 发起请求
  getHomeBannerData();
  getHomeCategoryData();
  getHomeHotData();
})
</script>

<template>
  <!-- navbar -->
  <CustomNavbar />
  <!-- scroll -->
  <scroll-view scroll-y refresher-enabled :refresher-triggered="refresherTriggered" class="scroll-view"
    @scrolltolower="onScrolltolower" @refresherrefresh="onRefresh">
    <!-- carousel -->
    <XtsSwiper :banners="banners" />
    <!-- CategoryPanel -->
    <CategoryPanel :categories="categories" />
    <!-- HotPanel -->
    <HotPanel :hots="hots" />
    <!-- XtsGuess -->
    <XtsGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
// page为程序根标签 
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
