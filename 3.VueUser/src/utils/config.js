const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
			menuList:[
				{
					name: '深造资讯管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'深造资讯',
							url:'/index/newsList'
						},
					]
				},
				{
					name: '校友论坛',
					icon: 'icon-common9',
					child:[
						{
							name:'校友论坛',
							url:'/index/forumList'
						},
					]
				},
				{
					name: '荣誉信息管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'荣誉信息',
							url:'/index/rongyuxinxiList'
						},
					]
				},
			]
        }
    },
    getProjectName(){
        return {
            projectName: "毕业生追踪系统"
        } 
    }
}
export default config
