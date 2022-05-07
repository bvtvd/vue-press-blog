const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    title: 'Hans Blog',
    description: '无私技术分享',
    theme: defaultTheme({
        logo: 'images/logo.png',
        navbar: [
            { text: '百度', link: '/' },
            { text: 'CSDN', link: '/', target: '_blank' },
            { text: '豆瓣', link: '/', target: '_self', rel: '' }
        ]
    })
}