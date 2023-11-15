<script setup lang="ts">
import type { CategoryItem } from '@/types/home';

defineProps<{ categories: CategoryItem[] }>();
</script>

<template>
    <view class="category">
        <navigator hover-class="none" url="#" class="category-item" v-for="item, i in categories" :key="item.id">
            <image :src="item.icon" class="icon"></image>
            <text class="text">{{ item.name }}</text>
        </navigator>
    </view>
</template>

<style lang="scss" scoped>
.category {
    margin: 20rpx 0 0;
    padding: 10rpx;
    display: flex;
    flex-wrap: wrap;
    min-height: 328rpx;

    .category-item {
        // width: 20%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;

        .icon {
            width: 100rpx;
            height: 100rpx;
        }

        .text {
            font-size: 26rpx;
            color: #666;
        }
    }
}</style>