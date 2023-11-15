<script setup lang="ts">
import { ref } from 'vue';
import type { BannerItem } from '@/types/home';



/**
 * props
 * 接收父组件传递过来的数据
 * 可直接在模板中使用props成员值
 */
defineProps<{ banners: BannerItem[] }>();

/**
 * 轮播图下标
 */
const activeIndex = ref(0);

/**
 * 当swiper下标发生变化时触发
 * @param e 事件对象
 */
const onChange: UniHelper.SwiperOnChange = (e) => {
    // 修改轮播下标
    // ! 非空断言，主观排除空值情况，?则允许空值
    activeIndex.value = e.detail!.current
}
</script>

<template>
    <view class="carousel">
        <!-- 轮播图片 -->
        <swiper autoplay circular @change="onChange">
            <swiper-item v-for="item, i in banners" :key="item.id">
                <navigator :url="item.hrefUrl" hover-class="none" class="navigator">
                    <image :src="item.imgUrl" mode="aspectFill" class="image" />
                </navigator>
            </swiper-item>
        </swiper>
        <!-- 指示点 -->
        <view class="indicator">
            <text v-for="item, i in banners.length" :key="item" class="dot" :class="{ active: i === activeIndex }">
            </text>
        </view>
    </view>
</template>

<style lang="scss">
$white: #ffffff;

:host {
    display: block;
    height: 280rpx;
}

.image {
    width: 100%;
    height: 100%;
}

.carousel {
    height: 280rpx;
    position: relative;
    overflow: hidden;
    transform: translateY(0);
    background-color: #efefef;

    .navigator {
        height: 100%;
    }

    .indicator {
        position: absolute;
        bottom: 16rpx;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;

        .dot {
            width: 30rpx;
            height: 6rpx;
            margin: 0 8rpx;
            border-radius: 6rpx;
            background-color: rgba($color: #ffffff, $alpha: .4);
        }

        .active {
            background-color: $white;
        }
    }
}
</style>