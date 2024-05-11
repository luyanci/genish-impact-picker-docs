import { defineConfig } from 'vitepress'
import Autosidebar from 'vite-plugin-vitepress-auto-sidebar'

export default defineConfig({
	lang: 'zh-CN',
	base: '/genish-impact-picker-docs/',
	title: '原神点名器文档',
	description: '原神点名器文档',
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	vite: {
		plugins: [
			Autosidebar({
				titleFromFile: true
			})
		]
	},
	themeConfig: {
		//logo: 'logo.png',
		footer: {
			copyright: 'Copyright © 2024 animation-picker'
		},
		nav: [
			{
				text: '用户文档',
				link: '/users/bu-shu-jiao-cheng'
			},
			{
				text: '开发文档',
				link: '/develop/begin'
			}
		],
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/animation-picker/genshin-impact'
			}
		]
	}
})
