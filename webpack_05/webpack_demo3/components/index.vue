

<template>
	<!-- 组件模板部分 -->
	<div>	
		<h1>{{msg}}</h1>
		<button @click="show">测试</button>
		<div class="box"></div>
	</div>
</template>
<script>
// 组件 js部分
	export default {
		data:function(){
			return {
				msg:"我是首页"
			}
		},
		methods:{
			show(){
				alert(this.msg);
			}
		}
	}
</script>

<style lang="scss">

/*@import属于css3 方法*/
	@import "../static/css/style.scss"


/*css部分*/
</style>

