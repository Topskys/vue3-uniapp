<script setup lang="ts">
import { getHotRecommend } from '@/services/hot';
import type { SubTypeItem } from '@/types/hot';
import { onLoad } from '@dcloudio/uni-app';
import { ref, reactive, onMounted } from 'vue';

// init state
const urlMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买金', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
const bannerPicture = ref(''); // 广告图片
const subTypes = ref<(SubTypeItem & { finish?: boolean })[]>([]); // 推荐选项
const activeIndex = ref(0); // 当前选中的选项


// uniapp获取页面参数
const query = defineProps<{ type: string }>();

// 设置页面标题
const currUrlMap = urlMap.find(v => v.type === query.type);
uni.setNavigationBarTitle({ title: currUrlMap!.title });

// 获取推荐数据
const getHotRecommendData = async () => {
  const res = await getHotRecommend(currUrlMap!.url, {
    page: import.meta.env.DEV ? 30 : 1,
    pageSize: 10,
  });
  bannerPicture.value = res.result.bannerPicture;
  subTypes.value = res.result.subTypes;
}

// 触底分页
const onScrolltolower = async () => {
  // 获取当前选项
  const currSubType = subTypes.value[activeIndex.value];
  // 当前页码累加
  if (currSubType.goodsItems.page < currSubType.goodsItems.pages) {
    currSubType.goodsItems.page++;
  } else {
    currSubType.finish = true;
    return uni.showToast({ icon: 'none', title: '没有更多数据了~' });
  }
  // 请求数据
  const res = await getHotRecommend(currUrlMap!.url, {
    subType: currSubType.id,
    page: currSubType.goodsItems.page,
    pageSize: currSubType.goodsItems.pageSize
  });
  // 提取新数据
  const newSubTypes = res.result.subTypes[activeIndex.value];
  // 当前选项数组追加
  currSubType.goodsItems.items.push(...newSubTypes.goodsItems.items);
}




onLoad(() => {
  getHotRecommendData();
});


</script>

<template>
  <view class="viewport">
    <!-- recommend cover -->
    <view class="cover">
      <image :src="bannerPicture" class="image"></image>
    </view>
    <!-- tabs -->
    <view class="tabs">
      <text class="text" :class="{ active: i === activeIndex }" v-for="(item, i) in subTypes" :key="item.id"
        @tap="activeIndex = i">{{ item.title
        }}</text>
    </view>
    <!-- recommend list -->
    <scroll-view scroll-y class="scroll-view" v-for="item, i in subTypes" :key="item.id" v-show="activeIndex === i"
      @scrolltolower="onScrolltolower">
      <view class="goods">
        <navigator class="navigator" :url="`/pages/goods/goods?id=${goods.id}`" hover-class="none"
          v-for="goods, gi in item.goodsItems.items" :key="goods.id">
          <image :src="goods.picture" mode="aspectFit" class="thumb" />
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">￥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ item.finish ? '没有更多数据了~' : '正在加载...' }}</view>
    </scroll-view>
  </view>
</template>

<style scoped lang="scss">
page {
  height: 100%;
  background-color: #ffffff;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 270rpx 0 0;
  position: relative;

  .cover {
    position: absolute;
    top: 0;
    width: 100%;
    .image {
      width: 100%;
      height: 210rpx;
    }

  }

  .tabs {
    position: absolute;
    top: 150rpx;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    width: 720rpx;
    height: 60rpx;
    padding: 60rpx 30rpx;
    font-size: 28rpx;
    border-radius: 10rpx;
    border: 1rpx solid #eee;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .goods {
    display: flex;
    flex-wrap: wrap;
    padding: 20rpx;

    .navigator {
      .thumb {
        width: 305rpx;
        height: 305rpx;
      }

      .name {
        height: 88rpx;
        font-size: 26rpx;
        margin: 10rpx 0;
        color: #262626;
        font-size: 28rpx;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        line-height: 1;
        color: #cf4444;
        font-size: 30rpx;
      }
    }
  }

  .symbol,
  .decimal {
    font-size: 70%;
  }
}


.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>