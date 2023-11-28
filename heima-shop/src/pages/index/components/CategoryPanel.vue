<script setup lang="ts">
import type { CategoryItem } from '@/types/home'

// 定义 props 接收数据
defineProps<{
    categories: CategoryItem[]
}>()
</script>

<template>
    <view class="category">
        <navigator class="category-item" hover-class="none" url="/pages/index/index" v-for="item in categories"
            :key="item.id">
            <image class="icon" :src="item.icon"></image>
            <text class="text">{{ item.name }}</text>
        </navigator>
    </view>
</template>

<style lang="scss">
@import '../styles/CategoryPanel.scss';
</style>
