const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/cl13356163/client/index.html'
        }
    },
    getProjectName(){
        return {
            projectName: "毕业生追踪系统"
        } 
    }
}
export default config
