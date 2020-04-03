module.exports = {
    // base:'/uco-vue/',
    title: 'uco-ui',
    description: 'A suit of ui components for Vue.js',
    port: 8090,
    themeConfig: {
        nav: [
            {
                text: '主页',
                link: '/'
            }
        ],
        sidebar: {
            '/components/': [
                {
                    collapsable: true,
                    children: [
                        'button'
                    ]
                }
            ]
        }
    }
}