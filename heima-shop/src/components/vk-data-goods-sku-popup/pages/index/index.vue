<template>
	<view class="app">
		<button @click="pageTo('index-dynamic')">进入动态数据版</button>
		<button @click="pageTo('index-static')" style="margin-top: 40rpx;">进入静态数据版</button>
	</view>
</template>

<script>
/* eslint disable */
export default {
	data() {
		return {

		}
	},
	methods: {
		pageTo(url) {
			uni.navigateTo({ url })
		}
	}
}
</script>

<style lang="scss" scoped>
.app {
	padding: 30rpx;
	font-size: 28rpx;
}
</style>
