<script setup lang="ts">
import { getHotRecommend } from '@/services/hot';
import type { SubTypeItem } from '@/types/hot';
import { ref, reactive, onMounted } from 'vue';

// init state
const urlMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买金', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
const bannerPicture = ref(''); // 广告图片
const subTypes = ref<SubTypeItem[]>([]); // 推荐选项
const activeIndex = ref(0)


// uniapp获取页面参数
const query = defineProps<{ type: string }>();

// 设置页面标题
const currUrlMap = urlMap.find(v => v.type === query.type);
uni.setNavigationBarTitle({ title: currUrlMap!.title });


const getHotRecommendData = async () => {
  const res = await getHotRecommend(currUrlMap!.url);
  bannerPicture.value = res.result.bannerPicture;
  subTypes.value = res.result.subTypes;
}

// 触底分页
const onScrolltolower = async () => {
  // 获取当前选项
  const currSubType = subTypes.value[activeIndex.value];
  // 当前页码累加
  currSubType.goodsItems.page++;
  // 请求数据
  const res = await getHotRecommend(currUrlMap!.url, {
    subType: currSubType.id,
    page: currSubType.goodsItems.page,
    pageSize: currSubType.goodsItems.pageSize
  });
}




onMounted(() => { });


</script>

<template>
  <view class="viewport">
    <!-- recommend cover -->
    <view class="cover">
      <image :src="bannerPicture"></image>
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
      <view class="loading-text">正在加载...</view>
    </scroll-view>
  </view>
</template>

<style scoped lang="scss">
.scroll-view {
  flex: 1;
}

.viewport {
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }

  .name {
    height: 88rpx;
    font-size: 26rpx;
  }

  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
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