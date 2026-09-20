import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views'
import home from '../views/pages/home.vue'
import login from '../views/pages/login.vue'
import newsList from '@/views/pages/news/list'
import forumList from '@/views/pages/forum/list'
import xueshengList from '@/views/pages/xuesheng/list'
import xueshengDetail from '@/views/pages/xuesheng/formModel'
import xueshengAdd from '@/views/pages/xuesheng/formAdd'
import xueshengRegister from '@/views/pages/xuesheng/register'
import xueshengCenter from '@/views/pages/xuesheng/center'
import biyequxiangList from '@/views/pages/biyequxiang/list'
import biyequxiangDetail from '@/views/pages/biyequxiang/formModel'
import biyequxiangAdd from '@/views/pages/biyequxiang/formAdd'
import rongyuxinxiList from '@/views/pages/rongyuxinxi/list'
import rongyuxinxiDetail from '@/views/pages/rongyuxinxi/formModel'
import rongyuxinxiAdd from '@/views/pages/rongyuxinxi/formAdd'
import banjiList from '@/views/pages/banji/list'
import banjiDetail from '@/views/pages/banji/formModel'
import banjiAdd from '@/views/pages/banji/formAdd'
import zhengshuxinxiList from '@/views/pages/zhengshuxinxi/list'
import zhengshuxinxiDetail from '@/views/pages/zhengshuxinxi/formModel'
import zhengshuxinxiAdd from '@/views/pages/zhengshuxinxi/formAdd'
import shenzaoxinxiList from '@/views/pages/shenzaoxinxi/list'
import shenzaoxinxiDetail from '@/views/pages/shenzaoxinxi/formModel'
import shenzaoxinxiAdd from '@/views/pages/shenzaoxinxi/formAdd'

const routes = [{
		path: '/',
		redirect: '/index/home'
	},
	{
		path: '/index',
		component: index,
		children: [{
			path: 'home',
			component: home
		}
		, {
			path: 'newsList',
			component: newsList
		}
		, {
			path: 'forumList',
			component: forumList
		}
		, {
			path: 'xueshengList',
			component: xueshengList
		}, {
			path: 'xueshengDetail',
			component: xueshengDetail
		}, {
			path: 'xueshengAdd',
			component: xueshengAdd
		}
		, {
			path: 'xueshengCenter',
			component: xueshengCenter
		}
		, {
			path: 'biyequxiangList',
			component: biyequxiangList
		}, {
			path: 'biyequxiangDetail',
			component: biyequxiangDetail
		}, {
			path: 'biyequxiangAdd',
			component: biyequxiangAdd
		}
		, {
			path: 'rongyuxinxiList',
			component: rongyuxinxiList
		}, {
			path: 'rongyuxinxiDetail',
			component: rongyuxinxiDetail
		}, {
			path: 'rongyuxinxiAdd',
			component: rongyuxinxiAdd
		}
		, {
			path: 'banjiList',
			component: banjiList
		}, {
			path: 'banjiDetail',
			component: banjiDetail
		}, {
			path: 'banjiAdd',
			component: banjiAdd
		}
		, {
			path: 'zhengshuxinxiList',
			component: zhengshuxinxiList
		}, {
			path: 'zhengshuxinxiDetail',
			component: zhengshuxinxiDetail
		}, {
			path: 'zhengshuxinxiAdd',
			component: zhengshuxinxiAdd
		}
		, {
			path: 'shenzaoxinxiList',
			component: shenzaoxinxiList
		}, {
			path: 'shenzaoxinxiDetail',
			component: shenzaoxinxiDetail
		}, {
			path: 'shenzaoxinxiAdd',
			component: shenzaoxinxiAdd
		}
		]
	},
	{
		path: '/login',
		component: login
	}
	,{
		path: '/xueshengRegister',
		component: xueshengRegister
	}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
