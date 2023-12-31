const {description} = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Savior',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#84be99'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'Document',
                link: '/guide/',
            },
            {
                text: 'Repository',
                items: [
                    {text: 'Gitee', link: 'https://gitee.com/issavior/savior'},
                    {text: 'GitHub', link: 'https://github.com/issavior/savior'},
                ]
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: true,
                    children: [
                        '',
                        'Component',
                        // 'EventBus',
                        // 'Retry',
                        // 'Lock',
                        // 'Pipeline',
                        // 'Ext',
                        // 'WorkFlow',
                    ]
                }
            ],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
