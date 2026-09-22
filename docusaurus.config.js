// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '107T Research Series',
  tagline: 'Papers on issues of interest to Isla Vista residents',
  favicon: 'img/zombie.svg',

  future: {},

  url: 'https://example-research-series.org',
  baseUrl: '/',

  organizationName: 'example-org',
  projectName: 'working-papers',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'paper',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/zombie.svg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '107T White Paper Series',
        logo: {
          alt: 'Series mark',
          src: 'img/zombie.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Table of Contents',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Series',
            items: [
              {label: 'Working Papers', to: '/paper/durability-heuristics'},
            ],
          },
          {
            title: 'About',
            items: [
              {label: 'Editorial policy', to: '/paper/durability-heuristics'},
              {label: 'Submissions', to: '/paper/durability-heuristics'},
            ],
          },
          {
            title: 'Built with',
            items: [
              {label: 'Docusaurus', href: 'https://docusaurus.io'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Applied Research Series. Distributed under CC BY 4.0. This is a demo site.`,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;