import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";
import {createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	// 检查process.cwd()路径下.env.develeport.local、.env.development、.env.local、.env这四个环境文件
	loadEnv(mode, process.cwd());
	return {

		// 静态资源基础路径 base: './' || '',
		base: '',

		resolve: {
			alias: {
				// 配置src目录
				"@": path.resolve(__dirname, "src"),
				// 导入其他目录
				"components": path.resolve(__dirname, "components"),
				extensions:[".js",".ts"]
			}
		},
		plugins: [
			vue(),
			// 配置后，Vant各组件才生效
			createStyleImportPlugin({
				resolves: [VantResolve()],
				libs:[
					{
						libraryName:"vant",
						esModule:"true",
						resolveStyle:name => `../es/${name}/style`
					}
				]
			}),
		],

		// 跨域代理
		server: {
			host: '0.0.0.0',
			port: "7373",
			open: true,
			proxy: {
				'/api': {
					target: "http://localhost:80/",
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, '') // 将匹配到的api替换成''
				}
			}
		}
	};
});
