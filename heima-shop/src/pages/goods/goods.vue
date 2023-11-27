<script setup lang="ts">
const { safeAreaInsets } = uni.getSystemInfoSync();

const query = defineProps<{ id: string }>();
</script>

<template>
  <scroll-view scroll-y class="viewport">
    <!-- base info  -->
    <view class="goods">
      <!-- goods main picture -->
      <view class="preview">
        <swiper>
          <swiper-item v-for="item in 8 " :key="item"><image src="" class="image" /></swiper-item>
        </swiper>
        <view class="indicator">
          <text class="current"></text>
          <text class="split">/</text>
          <text class="next"></text>
        </view>
      </view>
    </view>
    <!-- goods detail -->
    <view class="detail panel">
      <view class="title"><text>详情</text></view>
      <view class="content">
        <view class="properties">
          <view class="item">
            <text class="label">尺寸</text>
          </view>
        </view>
      </view>
    </view>
    <!-- similar recommend -->
    <view class="similar panel">
      <view class="title"><text>同类推荐</text></view>
      <view class="content">
        <navigator
          v-for="goods in 5"
          :key="goods"
          class="goods"
          hover-class="none"
          :url="`/pages/goods/goods?id=${goods}`"
        >
          <!-- <image class="image" :src="" /> -->
        </navigator>
      </view>
    </view>
  </scroll-view>
  <!-- user operation -->
  <view class="toolbar" :style="{ padding: safeAreaInsets?.bottom + 'px' }">
    <view class="icons">
      <button class="icons-button"><text class="icon-heart"></text>收藏</button>
      <button class="icons-button" open-type="contact">
        <text class="icon-handset"></text>客服
      </button>
      <navigator class="icons-button"> <text class="icon-cart"></text>购物车 </navigator>
    </view>
  </view>
</template>

<style lang="scss" scoped>
page {
  height: 100%;
}
</style>
