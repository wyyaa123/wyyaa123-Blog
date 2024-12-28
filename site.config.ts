import { defineSiteConfig } from "valaxy";

export default defineSiteConfig({

  url: "https://wyyaa123.github.io",

  lang: "zh-CN",

  title: "wyyaa123的博客",

  subtitle: "good morning, good afternoon and good night.",

  description: "",

  favicon: "https://images-repository-1310836028.cos.ap-nanjing.myqcloud.com/blog/favicon2.png",

  author: {
    name: "wyyaa123",
    email: "wyyaa123@nuaa.edu.cn",
    avatar: "https://images-repository-1310836028.cos.ap-nanjing.myqcloud.com/blog/avatar.jpg",
    status:{
      emoji: "🧑‍💻",
      message: "底层SCI挖掘机",
    },
    // intro: "A phd student in Tongji University.",
    link: ""
  },

  social: [
    {
      name: "GitHub",
      link: "https://github.com/wyyaa123",
      icon: "i-ri-github-line",
      color: "#6e5494",
    },
    {
      name: "哔哩哔哩",
      link: "https://space.bilibili.com/353521808",
      icon: "i-ri-bilibili-line",
      color: "#FF8EB3",
    },
    {
      name: "E-Mail",
      link: "mailto:wyyaa123@nuaa.edu.cn",
      icon: "i-ri-mail-line",
      color: "#8E71C1",
    },
  ],

  statistics: {
    enable: true,
    readTime: {
      speed: {
        /**
         * Chinese word count speed
         * @description 中文每分钟阅读字数
         * @default 300 (300 字/分钟)
         */
        cn: 300,
        /**
         * English word count speed
         * @description 英文每分钟阅读字数
         * @default 100 (200 字/分钟)
         */
        en: 100
      }
    }
  },

  // 文章评论设置
  comment: {
    enable: true
  },

  search: {
    enable: true,
    type: "fuse",
  },

  fuse: {
    options: {
      keys: ["title", "tags", "categories", "excerpt", "content"],
    },
  },

  mediumZoom: { 
    enable: true,
  },

  vanillaLazyload: {
    enable: true,
  },

  encrypt: {
    enable: true,
  },
});
