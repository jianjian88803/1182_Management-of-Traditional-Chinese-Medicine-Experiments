const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot3n829/",
            name: "springboot3n829",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot3n829/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "中药实验管理系统"
        } 
    }
}
export default base
