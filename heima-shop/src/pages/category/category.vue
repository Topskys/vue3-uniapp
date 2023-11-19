<script setup lang="ts">
  import { getHomeBanner } from '@/services/home';
  import { getCategoryTop } from '@/services/category';
  import type { BannerItem } from '@/types/home';
  import type { CategoryTopItem, CategoryChildItem } from '@/types/category';
  import { onLoad } from '@dcloudio/uni-app';
  import { ref, computed } from 'vue';

  //
  const activeIndex = ref(0);
  const banners = ref<BannerItem[]>([]);
  const categories = ref<CategoryTopItem[]>([]);

  // 获取广告牌数据
  const getBannerData = async () => {
    const res = await getHomeBanner(2);
    banners.value = res.result;
  }
  // 获取分类数据
  const getCategoryTopData = async () => {
    const res = await getCategoryTop();
    categories.value = res.result;
  }

  // 提取当前二级分类数据
  const subCategories = computed(() => {
    return categories.value[activeIndex.value]?.children || [];
  })

  onLoad(() => {
    getBannerData();
    getCategoryTopData();
  })
</script>

<template>
  <view class="viewport">
    <!-- search input -->
    <view class="search">
      <view class="input">
        <text class="icon-search">女靴</text>
      </view>
    </view>
    <!-- category -->
    <view class="category">
      <!-- left：primary classification -->
      <scroll-view scroll-y class="primary">
        <view class="item" :class="{ active: index === activeIndex }" @tap="activeIndex=index"
          v-for="(item,index) in categories" :key="item.id">{{ item.name }}</view>
      </scroll-view>
      <!-- right：secondary classification -->
      <scroll-view scroll-y class="secondary">
        <!-- picture -->
        <XtsSwiper class='banner' :banners="banners" />
        <!-- content wrap -->
        <view class='panel' v-for='item in subCategories' :key='item.id'>
          <view class='title'>
            <text class='name'>{{item.name}}</text>
            <navigator class="more" hover-class="none">全部</navigator>
          </view>
          <view class="section">
            <navigator class="more" hover-class="none" v-for='goods in item.goods' :key='goods.id'
              :url="`/pages/goods/goods?id=${goods.id}`">
              <image class="image" :src="goods.picture" />
              <view class="name ellipsis">{{goods.name}}</view>
              <view class="price">
                <text class="symbol">￥</text>
                <text class="number">{{goods.price}}</text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  //
  .search {
    background-color: #fff;

    .input {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64rpx;
      padding-left: 26rpx;
      color: #8b8b8b;
      font-size: 28rpx;
      border-radius: 32rpx;
      background-color: #f3f4f4;
    }
  }

  .icon-search {
    &::before {
      margin-right: 10rpx;
    }
  }

  .category {
    flex: 1;
    min-height: 400rpx;
    display: flex;

    .primary {
      overflow: hidden;
      width: 180rpx;
      flex: none;
      background-color: #f6f6f6;

      .item {
        height: 96rpx;
        text-align: center;
        line-height: 96rpx;
        font-size: 26rpx;
        color: #595c63;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          left: 42rpx;
          bottom: 0;
          width: 96rpx;
          border-top: 1rpx solid #e3e4e7;
        }
      }

      .active {
        background-color: #fff;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 8rpx;
          height: 100%;
          background-color: #27ba9b;
        }
      }
    }
  }


  .primary .item:last-child::after,
  .primary .active::after {
    display: 'none';
  }


  .secondary {
    background-color: #fff;

    .carousel {
      height: 200rpx;
      margin: 0 30rpx 20rpx;
      border-radius: 4rpx;
      overflow: hidden;
    }

    .panel {
      margin: 0 30rpx 0rpx;
    }

    .title {
      height: 60rpx;
      line-height: 60rpx;
      color: #333;
      font-size: 28rpx;
      border-bottom: 1rpx solid #f7f7f8;

      .more {
        float: right;
        padding-left: 20rpx;
        font-size: 24rpx;
        color: #999;
      }
    }

    .more {
      &::after {
        font-family: 'erabbit' !important;
        content: '\e6c2';
      }
    }

    .section {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 20rpx 0;

      .goods {
        width: 150rpx;
        margin: 0 30rpx 20rpx 0;

        &:nth-child(3n) {
          margin-right: 0;
        }

        .image {
          width: 150rpx;
          height: 150rpx;
        }

        .price {
          padding: 5rpx;
          font-size: 18rpx;
          color: #cf4444;
        }

        .number {
          font-size: 24rpx;
          margin-left: 2rpx;
        }
      }
    }
  }
</style>