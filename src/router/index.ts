import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router"
import routes from "./routes"

// const routes: Array<RouteRecordRaw> = rootRoutes


const router = createRouter({
    history: createWebHistory(),
    routes:<Array<RouteRecordRaw>>routes,
});

export default router








// // 自动化路由配置
// const mainRouterModules = import.meta.glob("../layout/*.vue")
// const viewRouterModules = import.meta.glob("../views/**/*.vue")

// // 子路由
// const childRoutes = Object.keys(viewRouterModules).map((path) => {
//     const childName = path.match(/\.\.\/views\/(.*)\.vue$/)[1].split('/')[1]
// 	return {
// 		path: `/${childName.toLowerCase()}`,
// 		name: childName,
// 		component: viewRouterModules[path]
// 	} 
// })

// // 根路由
// const rootRoutes = Object.keys(mainRouterModules).map((path) => {
//     const name = path.match(/\.\.\/layout\/(.*)\.vue$/)[1].toLowerCase();
//     const routePath = `/${name}`;
//     if (routePath === '/index') {
// 		return {
// 			path: '/',
// 			name,
// 			redirect: '/home',
// 			component: mainRouterModules[path],
// 			children: childRoutes
// 		};
//     }
// })