<script setup lang="ts">
import { getHomeGoodsGuessLike } from '@/services/home';
import type { PageParams, PageResult } from '@/types/global';
import type { GuessItem } from '@/types/home';
import { onMounted, ref } from 'vue';


// 定义变量
const guessList = ref<GuessItem[]>([]); // 猜你喜欢列表
const pageParams: Required<PageParams> = { // 分页参数，将可选字段类型改为必选
    page: 1,
    pageSize: 10,
};
const finish = ref(false); // 是否加载完成的标记


// 获取数据函数
const getHomeGoodsGuessLikeData = async () => {
    // 已结束退出函数并提示用户
    if (finish.value) {
        return uni.showToast({
            icon: 'none',
            title: '没有更多数据了~',
        })
    }
    const res = await getHomeGoodsGuessLike();
    // 数组追加
    guessList.value.push(...res.result.items);
    // 分页条件
    if (pageParams.page < res.result.pages) {
        // 页码累加
        pageParams.page++;
    } else {
        finish.value = true;
    }
}


// 重置数据
const resetData = () => {
    pageParams.page = 1;
    pageParams.pageSize = 10;
    finish.value = false;
    guessList.value = [];
}


// 组件挂载时执行（执行一次）
onMounted(() => {
    getHomeGoodsGuessLikeData();
})


// 组件暴露方法给外部调用
defineExpose({
    getMore: getHomeGoodsGuessLikeData,
    resetData,
})

</script>

<template>
    <view class="caption">
        <text class="text">猜你喜欢</text>
    </view>
    <view class="guess">
        <navigator class="guess-item" :url="`/pages/goods/goods`" hover-class="none" v-for="item, i in guessList"
            :key="item.id">
            <image :src="item.picture" mode="aspectFit" class="image" />
            <view class="name">{{ item.name }}</view>
            <view class="price">
                <text class="small">￥</text>
                <text>{{ item.price }}</text>
            </view>
        </navigator>
    </view>
    <view class="loading-text">{{ finish ? '已经到底啦' : '正在加载...' }}</view>
</template>


<style scoped lang="scss">
// host选择器表示选择整个文档（或文档的根元素）
:host {
    display: block;
}

.caption {
    display: flex;
    justify-content: center;
    line-height: 1;
    padding: 36rpx 0 40rpx;
    font-size: 32rpx;
    color: #262626;

    .text {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 28rpx 0 30rpx;

        &::before,
        &::after {
            content: "";
            width: 20rpx;
            height: 20rpx;
            background-image: url(@/static/images/bubble.png);
            background-size: contain;
            margin: 0 10rpx;
        }
    }
}


.guess {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20rpx;

    .guess-item {
        width: 345rpx;
        padding: 24rpx 20rpx 20rpx;
        margin-bottom: 20rpx;
        border-radius: 10rpx;
        overflow: hidden;
        background-color: #fff;

        .image {
            width: 304rpx;
            height: 260rpx;
        }

        .name {
            height: 75rpx;
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
            padding-top: 4rpx;
            color: #cf4444;
            font-size: 26rpx;

            .small {
                font-size: 80%;
            }
        }
    }
}

.loading-text {
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 20rpx 0;
}
</style>