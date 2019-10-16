
module.exports = {
  locales: {
    '/': {
      lang: 'ja',
        head: [
          ['meta',{ name:"robots", content:"noindex, nofollow"}]
        ]
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
        ]
      }
    ],
    displayAllHeaders: true,
  }
}
