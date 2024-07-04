
var projectName = '中药实验管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '实验教学',
	url: './pages/shiyanjiaoxue/list.html'
}, 
{
	name: '在线学习',
	url: './pages/zaixianxuexi/list.html'
}, 
{
	name: '实验信息',
	url: './pages/shiyanxinxi/list.html'
}, 

{
	name: '自由讨论',
	url: './pages/forum/list.html'
}, 
]

var adminurl =  "http://localhost:8080/springboot3n829/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"实验员","menuJump":"列表","tableName":"shiyanyuan"}],"menu":"实验员管理"},{"child":[{"buttons":["查看","修改","删除","查看评论"],"menu":"实验教学","menuJump":"列表","tableName":"shiyanjiaoxue"}],"menu":"实验教学管理"},{"child":[{"buttons":["查看","修改","删除","查看评论"],"menu":"在线学习","menuJump":"列表","tableName":"zaixianxuexi"}],"menu":"在线学习管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"实验信息","menuJump":"列表","tableName":"shiyanxinxi"}],"menu":"实验信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"实验预约","menuJump":"列表","tableName":"shiyanyuyue"}],"menu":"实验预约管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"实验指导","menuJump":"列表","tableName":"shiyanzhidao"}],"menu":"实验指导管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"实验评分","menuJump":"列表","tableName":"shiyanpingfen"}],"menu":"实验评分管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"器材信息","menuJump":"列表","tableName":"qicaixinxi"}],"menu":"器材信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"自由讨论","tableName":"forum"}],"menu":"自由讨论"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"实验教学列表","menuJump":"列表","tableName":"shiyanjiaoxue"}],"menu":"实验教学模块"},{"child":[{"buttons":["查看"],"menu":"在线学习列表","menuJump":"列表","tableName":"zaixianxuexi"}],"menu":"在线学习模块"},{"child":[{"buttons":["查看","预约"],"menu":"实验信息列表","menuJump":"列表","tableName":"shiyanxinxi"}],"menu":"实验信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","删除"],"menu":"实验预约","menuJump":"列表","tableName":"shiyanyuyue"}],"menu":"实验预约管理"},{"child":[{"buttons":["查看"],"menu":"实验指导","menuJump":"列表","tableName":"shiyanzhidao"}],"menu":"实验指导管理"},{"child":[{"buttons":["查看"],"menu":"实验评分","menuJump":"列表","tableName":"shiyanpingfen"}],"menu":"实验评分管理"},{"child":[{"buttons":["查看"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"实验教学列表","menuJump":"列表","tableName":"shiyanjiaoxue"}],"menu":"实验教学模块"},{"child":[{"buttons":["查看"],"menu":"在线学习列表","menuJump":"列表","tableName":"zaixianxuexi"}],"menu":"在线学习模块"},{"child":[{"buttons":["查看","预约"],"menu":"实验信息列表","menuJump":"列表","tableName":"shiyanxinxi"}],"menu":"实验信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"实验教学","menuJump":"列表","tableName":"shiyanjiaoxue"}],"menu":"实验教学管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"在线学习","menuJump":"列表","tableName":"zaixianxuexi"}],"menu":"在线学习管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"实验信息","menuJump":"列表","tableName":"shiyanxinxi"}],"menu":"实验信息管理"},{"child":[{"buttons":["查看","删除","审核"],"menu":"实验预约","menuJump":"列表","tableName":"shiyanyuyue"}],"menu":"实验预约管理"},{"child":[{"buttons":["查看","评分"],"menu":"实验指导","menuJump":"列表","tableName":"shiyanzhidao"}],"menu":"实验指导管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"实验评分","menuJump":"列表","tableName":"shiyanpingfen"}],"menu":"实验评分管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"实验教学列表","menuJump":"列表","tableName":"shiyanjiaoxue"}],"menu":"实验教学模块"},{"child":[{"buttons":["查看"],"menu":"在线学习列表","menuJump":"列表","tableName":"zaixianxuexi"}],"menu":"在线学习模块"},{"child":[{"buttons":["查看","预约"],"menu":"实验信息列表","menuJump":"列表","tableName":"shiyanxinxi"}],"menu":"实验信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"教师","tableName":"jiaoshi"},{"backMenu":[{"child":[{"buttons":["查看","指导"],"menu":"实验预约","menuJump":"列表","tableName":"shiyanyuyue"}],"menu":"实验预约管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"实验指导","menuJump":"列表","tableName":"shiyanzhidao"}],"menu":"实验指导管理"},{"child":[{"buttons":["查看"],"menu":"实验评分","menuJump":"列表","tableName":"shiyanpingfen"}],"menu":"实验评分管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"器材信息","menuJump":"列表","tableName":"qicaixinxi"}],"menu":"器材信息管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"实验教学列表","menuJump":"列表","tableName":"shiyanjiaoxue"}],"menu":"实验教学模块"},{"child":[{"buttons":["查看"],"menu":"在线学习列表","menuJump":"列表","tableName":"zaixianxuexi"}],"menu":"在线学习模块"},{"child":[{"buttons":["查看","预约"],"menu":"实验信息列表","menuJump":"列表","tableName":"shiyanxinxi"}],"menu":"实验信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"实验员","tableName":"shiyanyuan"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
