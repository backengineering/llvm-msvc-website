import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'LLVM-MSVC',
  description: '专为Windows开发者设计的LLVM',
  theme: defaultTheme({
    
    // 默认主题配置
    logo: '/logo.png',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
    
  })
})