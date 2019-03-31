<template>
	<transition name="fade">
		<div class="loading" v-if="show">
			<div class="loading-icon"></div>
		</div>
	</transition>

</template>

<script>
	export default{
		data(){
			return {
				show: false
			}
		},
		methods: {
			open(){
				this.show = true;
			},
			close(){
				this.show = false;
			}
		}
	}
</script>

<style scoped="scoped">
	.loading {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		/*width: 80px;*/
		/*height: 80px;*/
		/*transform: translate(-50%, -50%);*/
		background-color: transparent;
		color: #fff;
		text-align: center;
		/*line-height: 80px;*/
		z-index: 9999!important;

	}
	.loading-icon {
		width: 65px;
		height: 65px;
		/*background-color: red;*/
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-image: url('https://biyou-file.oss-cn-hangzhou.aliyuncs.com/cbt/assets/loading/jh_loading.gif');
		background-size: 100% 100%;
	}
	.fade-enter-active,
	.fade-leave-active {
	  transition: 0.3s ease-out;
	}
	.fade-enter {
	  opacity: 0;
	}
	.fade-leave-to {
	  opacity: 0;
	}
</style>
