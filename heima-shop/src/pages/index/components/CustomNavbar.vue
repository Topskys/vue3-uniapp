<script setup lang="ts">
// 获取手机屏幕便捷到安全区域的距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// console.log('safeAreaInsets----', safeAreaInsets)
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <!-- logo -->
    <view class="logo">
      <image class="logo-image" src="@/static/images/logo.png" />
      <text class="logo-text">新鲜 · 亲民 · 快捷</text>
    </view>
    <!-- search bar -->
    <view class="search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
$white: #ffffff;

.navbar {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 40rpx;
  background-image: url(@/static/images/navigator_bg.png);
  background-size: cover;

  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-left: 30rpx;

    .logo-image {
      width: 166rpx;
      height: 39rpx;
    }

    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: $white;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid $white;
      font-size: 26rpx;
    }
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rpx 0 26rpx;
    height: 64rpx;
    margin: 16rpx 20rpx;
    color: $white;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: rgba($color: #ffffff, $alpha: 0.5);

    .icon-search {
      &::before {
        margin-right: 10rpx;
      }
    }

    .icon-scan {
      font-size: 30rpx;
      padding: 15rpx;
    }
  }
}
</style>