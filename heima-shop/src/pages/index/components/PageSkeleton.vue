<!--
此文件为开发者工具生成，生成时间: 2023/11/17上午11:06:23
使用方法：(页面信息-生成页面骨架)
在 D:\project\vue3_uniapp\heima-shop\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\project\vue3_uniapp\heima-shop\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
    <view is="components/XtsSwiper">
        <view class="carousel XtsSwiper--carousel">
            <swiper :autoplay="false" :circular="true" :current="0"></swiper>
            <view class="indicator XtsSwiper--indicator">
                <text class="dot XtsSwiper--dot"></text>
                <text class="dot XtsSwiper--dot active XtsSwiper--active"></text>
                <text class="dot XtsSwiper--dot"></text>
                <text class="dot XtsSwiper--dot"></text>
                <text class="dot XtsSwiper--dot"></text>
            </view>
        </view>
    </view>
    <view is="pages/index/components/CategoryPanel">
        <view class="category CategoryPanel--category data-v-44ae5a81 CategoryPanel--data-v-44ae5a81">
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
                hover-class="none">
                <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
                <text
                    class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-196 sk-text">居家</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
                hover-class="none">
                <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
                <text
                    class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-505 sk-text">锦鲤</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
                hover-class="none">
                <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
                <text
                    class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-116 sk-text">服饰</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
                hover-class="none">
                <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
                <text
                    class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-580 sk-text">母婴</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
                hover-class="none">
                <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
                <text
                    class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-960 sk-text">个护</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
                hover-class="none">
                <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
                <text
                    class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-583 sk-text">严选</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
                hover-class="none">
                <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
                <text
                    class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-354 sk-text">数码</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
                hover-class="none">
                <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
                <text
                    class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-278 sk-text">运动</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
                hover-class="none">
                <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
                <text
                    class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-176 sk-text">杂项</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
                hover-class="none">
                <image class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"></image>
                <text
                    class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-217 sk-text">品牌</text>
            </navigator>
        </view>
    </view>
    <view is="pages/index/components/HotPanel">
        <view class="hot HotPanel--hot data-v-df6c854a HotPanel--data-v-df6c854a">
            <view class="hot-item HotPanel--hot-item data-v-df6c854a HotPanel--data-v-df6c854a">
                <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
                    <text
                        class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-978 sk-text">特惠推荐</text>
                    <text
                        class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-214 sk-text">精选全攻略</text>
                </view>
                <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="none">
                    <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                        mode="aspectFit"></image>
                    <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                        mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="hot-item HotPanel--hot-item data-v-df6c854a HotPanel--data-v-df6c854a">
                <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
                    <text
                        class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-974 sk-text">爆款推荐</text>
                    <text
                        class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-437 sk-text">最受欢迎</text>
                </view>
                <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="none">
                    <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                        mode="aspectFit"></image>
                    <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                        mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="hot-item HotPanel--hot-item data-v-df6c854a HotPanel--data-v-df6c854a">
                <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
                    <text
                        class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-792 sk-text">一站买全</text>
                    <text
                        class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-569 sk-text">精心优选</text>
                </view>
                <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="none">
                    <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                        mode="aspectFit"></image>
                    <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                        mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="hot-item HotPanel--hot-item data-v-df6c854a HotPanel--data-v-df6c854a">
                <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
                    <text
                        class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-184 sk-text">新鲜好物</text>
                    <text
                        class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-85 sk-text">生活加分项</text>
                </view>
                <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="none">
                    <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                        mode="aspectFit"></image>
                    <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                        mode="aspectFit"></image>
                </navigator>
            </view>
        </view>
    </view>
    <view is="components/XtsGuess" class="r">
        <view class="caption XtsGuess--caption data-v-034e0252 XtsGuess--data-v-034e0252">
            <text
                class="text XtsGuess--text data-v-034e0252 XtsGuess--data-v-034e0252 sk-transparent sk-text-0-0000-803 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
        </view>
    </view>
</template>

<style >
/*
此文件为开发者工具生成，生成时间: 2023/11/17上午11:31:05

在 D:\project\vue3_uniapp\heima-shop\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
style不要加scoped
*/
.sk-transparent {
    color: transparent !important;
}

.sk-text-6-2500-512 {
    background-image: linear-gradient(transparent 6.2500%, #EEEEEE 0%, #EEEEEE 93.7500%, transparent 0%) !important;
    background-size: 100% 27.9070rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-111 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.0698rpx;
    position: relative !important;
}

.sk-text-14-2857-196 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-505 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-116 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-580 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-960 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-583 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-354 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-278 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-176 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-217 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-978 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.9535rpx;
    position: relative !important;
}

.sk-text-14-2857-214 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
}

.sk-text-14-2857-974 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.9535rpx;
    position: relative !important;
}

.sk-text-14-2857-437 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
}

.sk-text-14-2857-792 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.9535rpx;
    position: relative !important;
}

.sk-text-14-2857-569 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
}

.sk-text-14-2857-184 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.9535rpx;
    position: relative !important;
}

.sk-text-14-2857-85 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
}

.sk-text-0-0000-803 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 31.3953rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}

.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}</style>