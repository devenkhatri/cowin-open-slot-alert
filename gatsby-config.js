module.exports = {
  siteMetadata: {
    siteTitle: 'CoWin Open Slot Alert',
    siteDescription: 'Get alert when the open slow is available for Covid Vaccination on CoWin portal',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://cowin-open-slot-alert.netlify.app/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Deven Goratela', // for example - 'Ivan Ganev'
    authorDescription: 'Disposable app for realtime usecase', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      // {
      //   icon: `at`,
      //   url: `mailto:mymail@mail.com`,
      // },
      {
        icon: `twitter`,
        url: `https://twitter.com/MoHFW_INDIA`,
        altText: `This is the official twitter account of Ministry of Health & Family Welfare, Government of India`,
      },
      // {
      //   icon: `github`,
      //   url: `https://github.com/devenkhatri`,
      // },
      // {
      //   icon: `node-js`,
      //   url: `https://www.npmjs.com/package/gatsby-theme-chronoblog`,
      // },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags',
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 ',
            },
          },
        },
        feedSearch: {
          symbol: '🔍',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CoWin Open Slot Alert`,
        short_name: `CoWin Alert`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // replace "UA-XXXXXXXXX-X" with your own Tracking ID
    //     trackingId: 'UA-XXXXXXXXX-X',
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-disqus`,
    //   options: {
    //     // replace "chronoblog-1" with your own disqus shortname
    //     shortname: `chronoblog-1`,
    //   },
    // },
    `gatsby-plugin-offline`,
  ],
};
