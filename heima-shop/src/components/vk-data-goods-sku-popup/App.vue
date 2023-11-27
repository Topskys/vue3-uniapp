<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	.uni-mask,
	.uni-modal,
	uni-toast,
	uni-modal,
	.uni-actionsheet{
		z-index: 999999 !important;
	}
	/*每个页面公共css */
</style>
