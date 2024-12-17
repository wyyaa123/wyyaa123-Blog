import type { UserThemeConfig } from "valaxy-theme-yun";
import { defineValaxyConfig } from "valaxy";
import { addonWaline } from 'valaxy-addon-waline';

// add icons what you will need
const safelist = ["i-ri-home-line"];

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: "yun",

  themeConfig: {

    type: "nimbo",

    banner: {
      enable: true,
      title: ['H e l l o', 'W o r l d'],
      cloud: {
        enable: false
      }
    },

    nav: [
      {
        text: "导航",
        link: "/projects",
        items: [
          { text: "项目列表", link: "/projects" },
          { text: "友情链接", link: "/links" },
        ],
      },
    ],

    bg_image: {
        enable: true,
        url: "https://images-repository-1310836028.cos.ap-nanjing.myqcloud.com/blog/background3.jpg",
        dark: "https://images-repository-1310836028.cos.ap-nanjing.myqcloud.com/blog/background2.jpg",
        opacity: 0.8,
      },

    pages: [
      {
        name: "项目列表",
        url: "/projects",
        icon: "i-ri-gallery-view",
        color: "var(--va-c-text)",
      },
      {
        name: "友情链接",
        url: "/links",
        icon: "i-ri-link",
        // color: 'dodgerblue',
      },
    ],

    footer: {
      since: 2022,
      beian: {
        enable: false,
        icp: "苏ICP备17038157号",
      },
    },
  },

  addons: [
    addonWaline({
      // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
      serverURL: 'https://waline-server-beta-seven.vercel.app/',
    }),
  ],

  unocss: { safelist },
});
