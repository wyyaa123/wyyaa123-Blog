---
title: Ubuntu安装CUDA, Cudnn以及TensorRT
date: 2024-12-17
categories: 环境配置
tags:
  - Ubuntu
  - 软件开发
---

<div style="text-align: center; font-weight: bold"> 在此假设你使用的是一个干净的崭新的Ubuntu系统 </div>

## 配置环境
系统: 
> Ubuntu 18.04

显卡:
> NVIDIA 4090

## 安装驱动
首先你需要在终端安装编译相关的依赖软件:
```bash
$ sudo apt-get install build-essential
```

其次，
