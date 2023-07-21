import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  base:'/docs/',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'LLVM-MSVC',
      description: 'This version is designed for windows users',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'LLVM-MSVC',
      description: '专为Windows开发者设计的LLVM',
    },
  },
  theme: defaultTheme({

    // 默认主题配置
    logo: '/logo.png',
    locales: {
      '/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        navbar: [
          {
            text: 'Home',
            link: '/',
          },
        ],
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        navbar: [
          {
            text: '首页',
            link: '/',
          },
        ],
      },
    },
    repo: 'NewWorldComingSoon/llvm-msvc',
    
  })
})