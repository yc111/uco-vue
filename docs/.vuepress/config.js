module.exports = {
    title: 'uco-ui',
    description: 'A suit of ui components for Vue.js',
    dest: './build',
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