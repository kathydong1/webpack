// 导入js模块
// 导入Vue
// 在webpack引入Vue  vue/dist/vue.js

import Vue from "vue/dist/vue.js";

import VueRouter from "vue-router";

Vue.use(VueRouter);


import Index from "./components/index.vue";
import List from "./components/list.vue";
import Show from "./components/show.vue";

// 注意引入成功之后,要使用


var router=new VueRouter({
	routes:[
		{path:"/",component:Index},
		{path:"/list",component:List},
		{path:"/show",component:Show},
		]
});



new Vue({
	el:"#app",
	router
})

