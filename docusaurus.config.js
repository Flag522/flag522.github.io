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
  favicon: 'img/flag-red-blue.svg',

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
          blogSidebarTitle: '全部博客',
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
        // hideOnScroll: true,
        title: '',
        logo: {
          alt: 'FLAG',
          src: 'img/flag-red-blue.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'Introduction',
          //   position: 'left',
          //   label: '小说',
          // },
          {to: '/Introduction', label: '烽淋氨埂', position: 'left'},
          {to: '/balderdash/overture', label: '《空谷幽呓》', position: 'left', activeBaseRegex: `/balderdash/`,},
          // {to: '/test1/intro11', label: 'test', position: 'left', activeBaseRegex: `/test1/`,},
          {to: '/blog', label: '博客', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © 2023 <a href="https://mp.weixin.qq.com/s?__biz=MzI3Mzg3NTY1OQ==&mid=2247483945&idx=1&sn=5e1727f543b2b59d4bc2e91b5cf6b0d8&chksm=eb1dd58ddc6a5c9b50e05fa2c3af1aeff764768aaa9467b9cb15558702e7791c2c6355376f80#rd"target="_blank"
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