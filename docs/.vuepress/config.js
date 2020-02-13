module.exports = {
  head: [['meta', { name: 'robots', content: 'noindex, nofollow' }]],
  locales: {
    '/': {
      lang: 'ja',
      description: 'Vue-powered Static Site Generator'
    }
  },
  themeConfig: {
    sidebar: [
      {
        title: 'ツール',
        collapsable: false,
        children: [
          '/tool/Mac環境構築',
          '/tool/Git',
          '/tool/Visual Studio Code',
          '/tool/Docker',
          '/tool/Local by Flywheel'
        ]
      }
    ],
    displayAllHeaders: true,
    sidebarDepth: 2
  }
}
