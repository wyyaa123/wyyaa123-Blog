---
title: Ubuntu安装CUDA, Cudnn以及TensorRT
date: 2024-12-17
categories: 环境配置
tags:
  - Ubuntu
  - 软件开发
---

<div style="text-align: center; font-size: 20px; font-weight: bold"> 在此假设你使用的是一个干净的崭新的Ubuntu系统 </div>

## 配置环境
系统: 
> Ubuntu 18.04 arch: ×86_64

显卡:
> NVIDIA 4090

## 安装驱动
首先你需要在终端安装编译相关的依赖软件:
```bash
$ sudo apt-get install build-essential
```

你需要打开软件更新 (software&update) -> 附加驱动更新 (Additional Drivers) 中选择NVIDIA显卡驱动安装 (🌟注意, 不要选择带Server, tested的驱动程序)
<div style="display: flex; justify-content: center; align-items: center;">
  <figure>
    <img src="https://images-repository-1310836028.cos.ap-nanjing.myqcloud.com/blog/Ubuntu%E5%AE%89%E8%A3%85CUDA%2C%20Cudnn%E4%BB%A5%E5%8F%8ATensorRT/%E8%BD%AF%E4%BB%B6%E6%9B%B4%E6%96%B0%E7%95%8C%E9%9D%A2.png" width="650">
  </figure>
  <figure>
    <img src="https://images-repository-1310836028.cos.ap-nanjing.myqcloud.com/blog/Ubuntu%E5%AE%89%E8%A3%85CUDA%2C%20Cudnn%E4%BB%A5%E5%8F%8ATensorRT/%E9%99%84%E5%8A%A0%E9%A9%B1%E5%8A%A8.png" width="650">
  </figure>
</div>

## 安装CUDA, Cudnn 和 TensorRT

在执行这一步时需要考虑到两个重点:
- 一为GPU计算能力, CUDA版本, Cudnn版本以及TensorRT版本需要相匹配; 
- 二为安装CUDA, cuDNN和TensorRT的格式.
如果版本不匹配那么在TensorRT推理时会报错核心错误, 如果安装格式没有选对则会导致安装失败.

### 版本选择
你可以先查看自己[显卡对应的计算能力](https://developer.nvidia.com/cuda-gpus), 然后再对照[Compute Capability Per Platform](https://docs.nvidia.com/deeplearning/tensorrt/support-matrix/index.html)查看自己应该选择的CUDA版本. 🌟注意, 你可以安装多个CUDA版本, 但是如果你需要TensorRT的话建议安装对应的CUDA版本. 随后, 你可以在[TensorRT文档](https://docs.nvidia.com/deeplearning/tensorrt/release-notes/index.html)中查看你需要的最低TensorRT版本的兼容性依赖. 举例: 显卡为40系的4090 GPU -> 计算能力: 8.9 -> `Requires CUDA Toolkit 11.8 or newer.` -> 安装 CUDA 11.8 -> 最低TensorRT支持版本 8.5.3 -> 兼容cuDNN 8.6.0. 

综上, 我安装的各软件版本为 CUDA 11.8, cuDNN 8.6.0, TensorRT 8.5.3.

### 格式选择
安装CUDA时选择去[NVIDIA官网归档](https://developer.nvidia.com/cuda-toolkit-archive), 比如依据我的系统版本, CPU架构, 显卡型号, 我的选择如下 (记住用runfile):

<img src="https://images-repository-1310836028.cos.ap-nanjing.myqcloud.com/blog/Ubuntu%E5%AE%89%E8%A3%85CUDA%2C%20Cudnn%E4%BB%A5%E5%8F%8ATensorRT/cuda%E9%80%89%E6%8B%A9.png">

类似的安装[cuDNN](https://developer.nvidia.com/rdp/cudnn-archive)和[TensorRT GA](https://developer.nvidia.com/tensorrt/download)时也去官方归档中安装, 在安装cuDNN和TensorRT时选择压缩文件格式的, 例如我选择的为:

<div style="display: flex; justify-content: center; align-items: center;">
  <figure>
    <img src="https://images-repository-1310836028.cos.ap-nanjing.myqcloud.com/blog/Ubuntu%E5%AE%89%E8%A3%85CUDA%2C%20Cudnn%E4%BB%A5%E5%8F%8ATensorRT/cuDNN%E5%AE%89%E8%A3%85.png" width="650">
  </figure>
  <figure>
    <img src="https://images-repository-1310836028.cos.ap-nanjing.myqcloud.com/blog/Ubuntu%E5%AE%89%E8%A3%85CUDA%2C%20Cudnn%E4%BB%A5%E5%8F%8ATensorRT/TensorRT%E5%AE%89%E8%A3%85.png" width="650">
  </figure>
</div>

### 其余设置
在安装好CUDA后你需要在~/.bashrc中添加相关环境变量:
```bash
$ vim ~/.bashrc
# 添加以下内容
export PATH=/usr/local/cuda-11.8/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-11.8/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
export CUDA_HOME=/usr/local/cuda-11.8
```
下载好cuDNN压缩包后, 解压缩后会得到`cudnn-linux-x86_64-8.6.0.163_cuda11-archive`文件夹 (💡不同版本的cuDNN会不一样)
```bash
$  tar -xf "/home/usrname/cudnn-linux-x86_64-8.6.0.163_cuda11.tar.xz"
```
并将解压缩好的文件夹中的include内容和lib内容, 拷贝到CUDA对应目录下:
```bash
$ sudo cp ./cudnn-linux-x86_64-8.6.0.163_cuda11-archive/include/* /usr/local/cuda-11.8/include/
$ sudo cp ./cudnn-linux-x86_64-8.6.0.163_cuda11-archive/lib/* /usr/local/cuda-11.8/lib64/ 
```
同样, 下载好TensorRT压缩包后, 解压缩后会得到`TensorRT-8.5.3.1`文件夹
```bash
$  tar -xf "/home/usrname/TensorRT-8.5.3.1.Linux.x86_64-gnu.cuda-11.8.cudnn8.6.tar.gz"
```
(Optional) 将`TensorRT-8.5.3.1`文件夹拷贝到`/usr/local`下
```bash
$ sudo cp TensorRT-8.5.3.1 /usr/local/
# 在~/.bashrc中添加以下内容
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/TensorRT-8.5.3.6/lib:$LD_LIBRARY_PATH
export LD_LIBRARY_PATH=/usr/local/TensorRT-8.5.3.1/targets/x86_64-linux-gnu/lib:$LD_LIBRARY_PATH
```
其中最后两句主要是为了在CMakeList链接TensorRT时所用

在链接CUDA和TensorRT时, 你需要在CMakeList中设置相应路径, 我的设置仅供参考, 以[TensorRTx](https://github.com/wang-xinyu/tensorrtx)中的MobileNetv3部署项目为例, 我的CMakeLists.txt内容如下:
```cmake
cmake_minimum_required(VERSION 2.6)

project(mobilenetv3)

add_definitions(-std=c++11)
add_compile_options(-w)

option(CUDA_USE_STATIC_CUDA_RUNTIME OFF)
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_BUILD_TYPE Debug)

set(CUDA_TOOLKIT_ROOT_DIR /usr/local/cuda-11.8)

find_package(CUDA 11.8 REQUIRED)

include_directories(${PROJECT_SOURCE_DIR}/include)
# include and link dirs of cuda and tensorrt, you need adapt them if yours are different
# cuda
include_directories(/usr/local/cuda-11.8/include)
link_directories(/usr/local/cuda-11.8/lib64)
# tensorrt
include_directories(/usr/local/TensorRT-8.5.3.1/include)
include_directories(/usr/local/TensorRT-8.5.3.1/samples/common)
link_directories(/usr/local/TensorRT-8.5.3.1/targets/x86_64-linux-gnu/lib)

add_executable(mobilenetv3 ${PROJECT_SOURCE_DIR}/mobilenet_v3.cpp)
target_link_libraries(mobilenetv3 nvinfer)
target_link_libraries(mobilenetv3 cudart)

add_definitions(-O2 -pthread)
```

<div style="text-align: center; font-size: 20px; font-weight: bold;">
    最后...., 玩的开心, Good Luck!🫡.
</div>
