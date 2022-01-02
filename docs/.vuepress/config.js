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
          '/tool/MacSetting',
          '/tool/Chrome',
          '/tool/Git',
          '/tool/VisualStudioCode',
          '/tool/Docker',
          '/tool/VirtualBox',
          '/tool/LocalbyFlywheel'
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
