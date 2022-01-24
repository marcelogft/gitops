const { description } = require('../../package')

module.exports = {
  base: '/gitops/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'GitOps',
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
    ['meta', { name: 'theme-color', content: '#ff944d' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    
    logo: '/logo.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true, // string | boolean
    nav: [
      {
        text: 'Cloud Native',
        link: '/cloudn/',
      },
      {
        text: 'IAC',
        link: '/iac/',
      },
      {
        text: 'Tools',
        link: '/tools/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      } 
    ],
    sidebar: {
      '/cloudn/': [
        {
          title: 'Cloud Native',
          collapsable: false,
          children: [
            '',
            'kubernetes',
          ]
        }
      ],
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
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
    '@vuepress/last-updated', 
  ]
}
