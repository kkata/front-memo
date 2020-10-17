module.exports = {
  title: 'front memo',
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
      },
      {
        title: 'API',
        collapsable: false,
        children: ['/API/Strava']
      }
    ],
    displayAllHeaders: true,
    sidebarDepth: 2
  }
}
