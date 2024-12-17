---
title: 怎么样使用Valaxy框架部署博客
date: 2024-12-16
categories: Valaxy 配置
tags:
  - Valaxy
---

在本文中主要会介绍我自己作为一名前端小白，是如何部署博客的。
## 配置环境
系统: 
> Windows 11 22H

软件包：
> Node 22.12.0
>
> npm: 10.9.0
>
> pnpm: 9.15.0
>
> Valaxy: v0.21.1

## 安装过程
好了, 在你安装好[NodeJs](https://nodejs.org/en)以及pnpm后就可以开始基本的命令行操作 (💡不推荐Ubuntu18.04的系统):
```bash
$ pnpm create valaxy
```

随后会出现以下界面, 其中的 ? 号就是目前正在进行的选项:
```bash
.../193cfffbd0c-53fc                     |  +28 +++
.../193cfffbd0c-53fc                     | Progress: resolved 28, reused 27, downloaded 1, added 28, done

  🌌 Valaxy  v0.21.1

? Select a type: » - Use arrow-keys. Return to submit.
>   Blog - For Most Users
    Theme - For Theme Developers
    Addon - For Addon Developers
```

其中第一个选项就是建立新博客, 直接按回车, 会出现以下界面:
```bash
.../193cfffbd0c-53fc                     |  +28 +++
.../193cfffbd0c-53fc                     | Progress: resolved 28, reused 27, downloaded 1, added 28, done

  🌌 Valaxy  v0.21.1

√ Select a type: » Blog - For Most Users
? Project name: » valaxy-blog
```
你可以输入一个喜欢的博客名字, 如"wyyaa123-blog", "test-blog"或直接回车. 随后会出现以下界面:
```bash
.../193cfffbd0c-53fc                     |  +28 +++
.../193cfffbd0c-53fc                     | Progress: resolved 28, reused 27, downloaded 1, added 28, done

  🌌 Valaxy  v0.21.1

√ Select a type: » Blog - For Most Users
√ Project name: ... valaxy-blog

📁 C:\Users\username\Desktop\valaxy-blog

  Scaffolding project in valaxy-blog ...
  Done.

? Install and start it now? » (Y/n)
```
输入Y或y都可, 随后会出现以下界面:
```bash
.../193cfffbd0c-53fc                     |  +28 +++
.../193cfffbd0c-53fc                     | Progress: resolved 28, reused 27, downloaded 1, added 28, done

  🌌 Valaxy  v0.21.1

√ Select a type: » Blog - For Most Users
√ Project name: ... valaxy-blog
  📁 C:\Users\86311\Desktop\valaxy-blog

  Scaffolding project in valaxy-blog ...
  Done.

√ Install and start it now? ... yes
? Choose the agent » - Use arrow-keys. Return to submit.
    npm
    yarn
>   pnpm
```
在此我使用pnpm来构建项目, 你也可以使用其他两个工具, 但是在使用前你需要安装工具包`npm install -g pnpm`或`npm install -g yarn`,随后会出现以下界面:
```bash
.../193cfffbd0c-53fc                     |  +28 +++
.../193cfffbd0c-53fc                     | Progress: resolved 28, reused 27, downloaded 1, added 28, done

  🌌 Valaxy  v0.21.1

√ Select a type: » Blog - For Most Users
√ Project name: ... valaxy-blog
  📁 C:\Users\86311\Desktop\valaxy-blog

  Scaffolding project in valaxy-blog ...
  Done.

√ Install and start it now? ... yes
√ Choose the agent » pnpm
Packages: +829
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 906, reused 816, downloaded 13, added 829, done
node_modules/.pnpm/vue-demi@0.14.10_vue@3.5.13_typescript@5.7.2_/node_modules/vue-demi: Running postinstall script, done in 117ms

dependencies:
+ valaxy 0.21.1
+ valaxy-theme-yun 0.21.1

devDependencies:
+ typescript 5.7.2

 WARN  Issues with peer dependencies found
.
└─┬ valaxy 0.21.1
  └─┬ vite-plugin-vue-layouts 0.11.0
    └── ✕ unmet peer vite@"^4.0.0 || ^5.0.0": found 6.0.3

Done in 2m 42.6s

> valaxy-blog@0.0.0 dev C:\Users\86311\Desktop\valaxy-blog
> valaxy

◐ Resolve valaxy config ...                                                                                                                                                                                                      23:24:56  
✔ Resolve userValaxyConfig from C:/Users/86311/Desktop/valaxy-blog/valaxy.config.ts 74.43ms                                                                                                                                     23:24:56   
✔ Resolve siteConfig from C:/Users/86311/Desktop/valaxy-blog/site.config.ts 75.15ms                                                                                                                                             23:24:56   
✔ Resolve valaxy.config.ts from theme(yun) 137.56ms                                                                                                                                                                             23:24:56   
✔ Resolve addons from C:/Users/86311/Desktop/valaxy-blog
✔ [valaxy] server ready.

  🌌 Valaxy  v0.21.1

  🪐 theme   > yun (v0.21.1)
  📁 C:\Users\86311\Desktop\valaxy-blog

  Preview    > http://localhost:4860/
  Network    > http://192.168.80.1:4860/
  Network    > http://192.168.1.122:4860/

  shortcuts  > restart | open | qr | edit
```

Valaxy在安装后会自动的在本地部署博客网页, 你可以`Ctrl + 左键`点击链接访问模板博客网页. 至此, 基础本地博客搭建就完成了😆.
<div align="center">
  <img src="https://images-repository-1310836028.cos.ap-nanjing.myqcloud.com/blog/%E6%80%8E%E4%B9%88%E6%A0%B7%E4%BD%BF%E7%94%A8Valaxy%E6%A1%86%E6%9E%B6%E9%83%A8%E7%BD%B2%E5%8D%9A%E5%AE%A2/valaxy-template.png" alt="描述" width="750">
</div>

## 部署至GitHub Page 🚀 
在开始前, 你需要在GitHub上部署博客项目, 并将该项目命名为`usrname. github.io`, 例如我的博客项目名称为`wyyaa123.github.io`, 创建时记得点击添加README.md文件, 不然你需要在`git`手动添加, 很麻烦. 
随后点击`Setting`, 选择`Actions/General`, 在`Workflow permissions`中选择`Read and write permissions`后保存. 此处我没有修改Page中的分支选项.


在创建项目 (~~新建文件夹~~) 后, 在自己的电脑上克隆该项目. 打开终端进入由pnpm生成的文件夹 (我的路径为 "C:\Users\86311\Desktop\valaxy-blog"), 执行以下命令:
```bash
pnpm run dev # pnpm会自动构建博客项目并生成dist文件, 将你克隆文件夹中的`.git`文件拷贝到dist文件夹下
cd dist
git add . # 添加当前文件夹下的所有文件
git commit -m '写上你喜欢的备注' # 我一般写时间
git push # 在此默认你已经设置好了git的用户认证
```
过一段时间等待部署完成即可查看新建的博客网站. 一般来说和在本地查看到的博客样式相同, 如果你发现和自己在本地部署的不一致, 可等待几分钟再刷新一下, 或者清除浏览器缓存再刷新一遍.

## 关于个性化 💕
个性化的所有选项你都可以在相对路径`node_modules/.pnpm/valaxy-theme-yun@0.21.1_rollup@4.28.1_vue@3.5.13_typescript@5.7.2_/node_modules/valaxy-theme-yun/types/index.d.ts`下找到相关配置说明. 你可以参考云游君在[示例站点](https://github.com/YunYouJun/valaxy/tree/main/demo/yun)配置, 或者查看我在[GitHub]()上提供的个性化配置文件. 


<div style="text-align: center; font-size: 20px; font-weight: bold;">
    最后...., 玩的开心, Good Luck!🫡.
</div>


