// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '烽淋氨埂',
  tagline: '热忱之心不可泯灭',
  url: 'https://flag522.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/flags.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'flag522', // Usually your GitHub org/user name.
  projectName: 'flag522.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'test1',
        path: 'test1',
        routeBasePath: 'test1',
        sidebarPath: require.resolve('./sidebars.js'),
      }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'balderdash',
        path: 'balderdash',
        routeBasePath: 'balderdash',
        sidebarPath: require.resolve('./sidebars.js'),
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogTitle: '',
          blogSidebarTitle: '列表',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // style: 'dark',
        // hideOnScroll: true,
        title: '烽淋氨埂',
        logo: {
          alt: 'FLAG',
          src: 'img/flaglr.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'Introduction',
          //   position: 'left',
          //   label: '小说',
          // },
          {to: '/Introduction', label: 'ℹ️关于本站', position: 'left'},
          {to: '/balderdash/overture', label: '📚空谷幽呓', position: 'left', activeBaseRegex: `/balderdash/`,},
          // {to: '/test1/intro11', label: 'test', position: 'left', activeBaseRegex: `/test1/`,},
          {to: '/blog', label: '📒写作笔记　', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © 2023 <a href="https://mmbiz.qpic.cn/mmbiz_jpg/vuGJ38BGDpkZ17hWQvAnHh438FicStoiamO9BdCRdzdT9mrf4Xf2ibEjrwdMkXwZ0RcXuia3NjEdaCQyByQZVDWW7g/0?wx_fmt=jpeg&wxfrom=3"target="_blank"
        >Flag550</a>, Built with <a href="https://www.docusaurus.cn/" target="_blank"
        >Docusaurus</a>.`,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;