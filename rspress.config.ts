import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginRss } from '@rspress/plugin-rss';
import pluginSitemap from 'rspress-plugin-sitemap';
import { pluginFontOpenSans } from 'rspress-plugin-font-open-sans';
// import { Myplugin } from './plugins/index';

const siteUrl = 'https://iamsee.top';

export default defineConfig({
  root: 'docs',
  globalStyles: path.join(__dirname, 'styles/index.css'),
  title: 'Rock Chen',
  icon: '/favicon.ico',
  logo: {
    light: '/favicon.ico',
    dark: '/favicon.ico',
  },
  logoText: 'BLOG',
  markdown: {
    checkDeadLinks: true,
  },
  ssg: {
    strict: true,
  },
  plugins: [
    // Myplugin(),
    pluginFontOpenSans(),
    pluginRss({
      siteUrl: siteUrl,
      feed: { id:"feed",test: '/blog/' },
    }),
    pluginSitemap({
      domain: siteUrl,
    }),
  ],
  route: {
    cleanUrls: true,
    // exclude: ['**/fragments/**'],
  },
  themeConfig: {
    outlineTitle: 'ON THIS PAGE',
    hideNavbar: 'auto',
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    enableScrollToTop: true,
    searchPlaceholderText: 'Search Blog',
    footer: {
      message: 'CC BY-NC-SA 4.0 2023-PRESENT © chansee97',
    },
    socialLinks: [
      {
        icon: 'wechat',
        mode: 'img',
        content: "https://cdn.jsdelivr.net/gh/chansee97/static/wechat.png",
      },
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/chansee97',
      },
      {
        icon: 'bilibili',
        mode: 'link',
        content: 'https://space.bilibili.com/3850132',
      },
    ],
  },
});
