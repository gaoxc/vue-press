module.exports = {
    title: 'My VuePress',
    base: '/vue-press/',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'VuePress', link: 'https://vuepress.vuejs.org/' },
      ],
      sidebar: [
        '/',
        '/about/',
        {
          title: 'Group 2',
          collapsable: false,
          children: [
            '/guide/'
          ]
        }
      ]
    }
  }