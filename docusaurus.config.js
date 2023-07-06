// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My TW Task',
  tagline: 'TW Task for Nobl9 :)',
  favicon: 'img/favicon.ico',
  url: 'https://tw-task.com',
  baseUrl: '/',
  organizationName: 'labtom', // Usually your GitHub org/user name.
  projectName: 'tw-task-docusaurus', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          breadcrumbs: true,
        },
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Nobl9 Tech Writing Task',
          src: '/img/nobl9_logo.svg',
          srcDark: 'img/logo_dark.svg',
          href: 'https://www.nobl9.com/',
          height: 66,
          width: 136,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial - Check First',
          },
          {
            label: 'Tech Writing Task',
            position: 'left',
            to: '/Tech_Writing_Task/'
          },
          {
            href: 'https://docs.nobl9.com/',
            position: 'right',
            label: 'Nobl9 Documentation',
          },
          {
            href: 'https://www.nobl9.com/',
            label: 'Nobl9 Home',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'Nobl9 Home',
                href: 'https://nobl9.com/',
              },
              {
                label: 'Tutorials',
                href: 'https://www.nobl9.com/explore/learning-center',
              },
              {
                label: 'Tips & Tricks',
                href: 'https://www.nobl9.com/learn/tips',
              },
              {
                label: 'FAQ',
                href: 'https://www.nobl9.com/explore/learning-center#faq',
              },
              {
                label: 'Support',
                href: 'https://www.nobl9.com/contact/support',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact Us',
                href: 'https://nobl9.com/about/#contact',
              },
              {
                label: 'Privacy Policy',
                href: 'https://nobl9.com/privacy-policy/',
              },
              {
                label: 'Terms of Use',
                href: 'https://nobl9.com/terms-of-use/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
