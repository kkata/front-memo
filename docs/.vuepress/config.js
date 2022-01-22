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
        children: ['/API/Strava']
      }
    ],
    sidebarDepth: 2
  }
}
