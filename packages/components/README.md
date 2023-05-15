## 🤟 介绍

因为刚开始搭建项目所以很多自动化还没做，所以目前只能手动添加组件，后续会做自动化脚本，方便添加组件。

### 📖 目录结构

```bash

├── _hooks  hooks
├── _icon   图标存放文件的SVG
├── _interface  全局接口定义
├── _tokens     全局定义变量
├── _utils      全局工具方法
├── dkbutton    按钮组件
├── dkcodedisplay    内部用展开收起组件
├── dkicon           图标文件
├── dkshadow         阴影组件
```

## 🌵 使用

```shell
  1.在packages/components目录下添加组件
  2.在packages/components/index.ts中导出组件
  3.在packages/theme-chalk/src目录下添加组件样式
  4.在packages/theme-chalk/src/index.scss中导入组件样式
  5.在packages/dk-plus/index.ts中导出组件
```
