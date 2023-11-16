<script setup lang="ts">
import type { HotItem } from '@/types/home';


defineProps<{ hots: HotItem[] }>();


</script>

<template>
    <view class="hot">
        <view class="hot-item" v-for="item, i in hots" :key="item.id">
            <view class="title">
                <text class="title-text">{{ item.title }}</text>
                <text class="title-desc">{{ item.alt }}</text>
            </view>
            <navigator :url="`/pages/hot/hot?type=${item.type}`" hover-class="none" class="cards">
                <image :src="child" mode="aspectFit" class="image" v-for="child, ci in item.pictures" :key="child" />
            </navigator>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.hot {

    display: flex;
    flex-wrap: wrap;
    min-height: 508rpx;
    margin: 20rpx 20rpx 0;
    border-radius: 10rpx;
    background-color: #fff;

    .title {
        display: flex;
        align-items: center;
        padding: 25rpx 24rpx 0;
        font-size: 32rpx;
        color: #262626;
        position: relative;

        .title-desc {
            font-size: 24rpx;
            color: #7f7f7f;
            margin-left: 18rpx;
        }
    }

    .hot-item {
        width: 50%;
        height: 254rpx;
        display: flex;
        flex-direction: column;
        border-right: 1rpx solid #eee;
        border-top: 1rpx solid #eee;

        .title {
            justify-content: start;
        }

        &:nth-child(2n) {
            border-right: 0 none;
        }

        &:nth-child(-n+2) {
            border-top: 0 none;
        }
    }

    .cards {
        flex: 1;
        padding: 15rpx 20rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .image {
            width: 100%;
            height: 150rpx;
        }
    }
}
</style>