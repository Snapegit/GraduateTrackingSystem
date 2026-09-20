	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import forum from '@/views/forum/list'
	import xuesheng from '@/views/xuesheng/list'
	import rongyuxinxi from '@/views/rongyuxinxi/list'
	import banji from '@/views/banji/list'
	import biyequxiang from '@/views/biyequxiang/list'
	import config from '@/views/config/list'
	import shenzaoxinxi from '@/views/shenzaoxinxi/list'
	import zhengshuxinxi from '@/views/zhengshuxinxi/list'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/news',
			name: '深造资讯',
			component: news
		}
		,{
			path: '/forum',
			name: '我的发布',
			component: forum
		}
		,{
			path: '/xuesheng',
			name: '学生',
			component: xuesheng
		}
		,{
			path: '/rongyuxinxi',
			name: '荣誉信息',
			component: rongyuxinxi
		}
		,{
			path: '/banji',
			name: '班级',
			component: banji
		}
		,{
			path: '/biyequxiang',
			name: '毕业去向',
			component: biyequxiang
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/shenzaoxinxi',
			name: '深造信息',
			component: shenzaoxinxi
		}
		,{
			path: '/zhengshuxinxi',
			name: '证书信息',
			component: zhengshuxinxi
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
