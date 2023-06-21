# 贡献

## 🙋 在您贡献之前，请先阅读以下内容

你好！欢迎使用 DK-plus！

我很高兴你有兴趣为 DK-plus 做贡献。在提交您的贡献之前，请务必花点时间阅读以下指南. 这可以让我们更好地协作，避免不必要的工作量，节省大家的时间。

## 🚫 禁止直接搬运

众所周知，在市面上的组件库有很多，很多时候我们需要开发的新组件在市面上早已经开发好了，但是请勿直接复制其它第三方源码进行使用

开发组件库本身是一个学习进步的过程，不要仅仅是为了新增组件而新增组件，希望各位参与者可以在新增组件过程中学习到一些东西来提升自己的技术。如果在开发阶段的某个功能遇到了困难，你可以发起一个讨论，或者也可以直接联系我或在群里求助，当然去学习参考其它开源库也是可以的，只是希望你在写的时候，是已经理解了问题，自己来动手实践的。

## 🛠️ 启动项目

在贡献之前，你需要先将项目启动起来，这样你才能更好的了解项目的结构，以及如何进行开发。

- 安装 [node](http://nodejs.cn)，版本 >= 16
- 安装 [pnpm](https://pnpm.io/zh)，最新版即可

如果你已经做好了前面的准备，可以直接跳过，从这里开始:

- Fork [dk-plus](https://github.com/dk-plus-ui/dk-ui)

- 克隆你的 fork 到本地

### 📖 目录结构

```bash

├── .github     # github配置文件
├── .husky      # 代码提交前检测
├── .vscode     # vscode配置文件
├── build       #打npm包工程文件
├── ├── utils   # 打包工具配置
├── ├── component.ts  #文件输出配置
├── ├── full-component.ts #打包文件输出过滤设置
├── ├── gen-types.ts      #gulpfile设置
├── ├── gulpfile.ts       #打包启动文件
├── └─ packages.ts       #专门打包util ， 指令 ， hook的
├── coverage   #测试覆盖率
├── deploy          # 远程命令SSH上传到服务器配置
├── ├── config.js   # 远程命令SSH上传到服务器配置
├── ├── index.sh   # 远程命令SSH上传到服务器配置
├── docs   #文档项目
├── ├── .vitepress  #文档配置文件
├── ├── ├── cache     #本地运行缓存文件
├── ├── ├── data  #文档配置文件
├── ├── ├── ├──  description.ts  #说明文件
├── ├── ├── ├──  expansionNav.ts #扩展导航文件
├── ├── ├── ├──  header.ts  #头部meat 文件
├── ├── ├── ├──  nav.ts  #导航文件
├── ├── ├── └─  sidebar.ts #侧边栏导航文件
├── ├── ├── dist  #打包后的文件
├── ├── ├── json  #文档配置文件
├── ├── ├── ├──   contribution.json #贡献者名单文件
├── ├── ├── ├──   friendlyLinks.json  #友情链接文件
├── ├── ├── └─  home.json          #首页文件
├── ├── ├── plugins #文档配置文件
├── ├── ├── ├──   index.ts  #文档配置主文件
├── ├── ├── ├──   plugin-module.ts #创建 markdown 实例
├── ├── ├── └─    set-style.ts     #设置文档样式(英杰制作)
├── ├── ├── theme   #自定义主题
├── ├── ├── ├── components  #自定义主题文件夹
├── ├── ├── ├── └─ home.vue  #主页样式插槽
├── ├── ├── ├── style  #自定义主题样式文件夹
├── ├── ├── ├── ├── global.scss #全局样式
├── ├── ├── ├── ├── home.scss   #主页样式
├── ├── ├── ├── └─ vitepress.scss    #菜单样式
├── ├── └─ config.ts   #文档配置文件
├── ├── expansion  #文档扩展文件
├── ├── ├──  Flutter #Flutter文档扩展文件
├── ├── ├──  ├── FlutterDome  #Flutter Dome
├── ├── ├──  ├── └─ structure.md #Flutter Dome结构
├── ├── ├──  ├── ios #ios文档扩展文件
├── ├── ├──  ├──  ├── installXcode  #安装XcodeIOS
├── ├── ├──  ├──  └─  createProject  #创建项目 IOS 中
├── ├── ├──  ├── windows #windows文档扩展文件
├── ├── ├──  ├──  ├── fvmInstall  #安装fvm
├── ├── ├──  ├──  ├── WinInstall  #安装vscode 插件
├── ├── ├──  ├──  └─  AndroidInstall #安装Android Studio
├── ├── node_modules  # 项目依赖
├── ├── index.md   #文档首页
├── ├── package.json  #文档依赖文件
├── └─  vite.config.ts #文档项目设置
├── images          # 远程图片备份
├── logo   #图标logo
├── node_modules    # 项目依赖
├── npm #npm包项目
├── └─  dist #打包后的文件
├── packages        # 组件库组件
├── ├── components    # 存放所有的组件
├── ├── ├── _hooks        # hooks
├── ├── ├── ├──get-button  # 获取按钮的方法(hooks_dk-button)
├── ├── ├── ├──get-Global  # 获取全局的方法(hooks_包含组件类型_组件属性)
├── ├── ├── ├── public       # 公共的hooks方法
├── ├── ├── ├── ├──  get-color  #颜色处理加深 减淡
├── ├── ├── ├── ├──  get-props  #获取组件的props
├── ├── ├── ├── ├──  get-Global   #获取组件props的size | type 值给定默认值
├── ├── ├── ├── ├──  get-props    #获取组件props string 类型的值 和obj类型的值
├── ├── ├── ├── ├──  get-return   #执行方法函数
├── ├── ├── ├── ├──  get-ripples  #指定元素内的点击未知 为特殊组件定制插入元素 例如dk-button 水波纹效果
├── ├── ├── ├── ├──  get-StyleList    #用于获取props内参数根据设置生成对应名称的class 获取传入的样式数组模式的值解析  判断是否为样式添加单位
├── ├── ├── ├──  set-size     #简易版是否判断需要添加单位
├── ├── ├── ├──index.ts    # hooks出口文件
├── ├── ├── _icon     # 存放所有的图标动态组件的地方
├── ├── _interface    # 项目内的接口文件
├── ├── _tokens       # 项目内的默认值设置
├── ├── _utils        # 组件内用的工具方法
├── ├── ├── index.ts      # 组件内工具出口文件
├── ├── ├── props         # 组件内props推断方法
├── ├── ├── typeof        # 组件内typeof数据类型判断方法
├── ├── ├── filtration    # 驼峰转换为短横线命名  将数字尺寸改为字符串
├── ├── ├── test          # 组件内测试方法
├── ├── dkbutton  #按钮组件
├── ├── dkcodedisplay #代码展示组件
├── ├── dkcontainer   #页面布局组件
├── ├── dkfooter      #页面布局组件-底部组件
├── ├── dkheader      #页面布局组件-头部组件
├── ├── dkicon        #图标组件
├── ├── dkinput       #输入框组件
├── ├── dkinputNumber #输入框组件按钮
├── ├── dklaside      #页面布局组件-左侧组件
├── ├── dkmain        #页面布局组件-中级布局
├── ├── dkshadow  #盒模型阴影组件
├── ├── index.ts  #组件入口文件
├── ├── utils         # 存放工具方法
├── ├── theme-chalk   # 存放对应的样式,样式打包工具箱
├── ├── ├── src       # 存放对应的样式
├── ├── ├── ├── mixins  # 全局class命名生成方法
├── ├── ├── ├── ├── configuration # 私有组件样式配置
├── └─  └─ gulpfile.ts # 打包工具
├── ├── dk-setup-name      #  根据命令生成组件文件夹 暂未实现
├── ├── dk-eslint          #  项目内的eslint配置
├── ├── dk-plus         # 出口文件
├── └─ utils           # 项目打包辅助器
├── play      # 组件调试测试项目
├── ├──  node_modules  # play的依赖 测试目录
├── ├──  router        # 路由配置
├── ├──  typings       # ts的声明文件
├── ├──  views         # 页面文件
├── ├──  app.vue       # vue app的入口文件
├── ├──  index.html    # index.html  首页的html
├── ├──  main.ts       # main.ts     程序入口文件
├── ├──  package.json  # package.json  项目入口配置
├── └─  vite.config.ts  # vite 轻量级启动项
├── typings        #  ts的声明文件
├── └─ vue-shim.d.ts # typescript 声明文件
├── .lintstagedrc   # lint-staged 配置文件提交前检测
├── .markdownlint.json # markdownlint 配置文件
├── .eslintignore   #ESLint 去忽略特定的文件和目录
├── .eslintrc.js    #ESLint 配置文件
├── .gitignore      # git 过滤说明文件
├── .markdownlint.json # markdownlint 配置文件
├── .prettierrc.js  # Prettier 配置文件
├── .prettierignore  # Prettier 过滤说明文件
├── .npmrc          # npm 配置文件
├── contribution.en-us.md # 贡献说明文件英文版
├── contribution.md # 贡献说明文件中文版
├── CUpdateLog.en-US.md # 更新日志英文版
├── CUpdateLog.md # 更新日志中文版
├── LICENSE         # 开源协议
├── README.md       # 项目说明文件
├── README.en-US.md # 项目说明文件英文版
├── package.json    # 项目配置文件
├── pnpm-lock.yaml  # pnpm配置文件
├── pnpm-workspace.yaml #pnpm配置文件
└─  tsconfig.json # TS配置文件

```

接下来执行命令：

```shell
# clone 项目
git clone https://github.com/dk-plus-ui/dk-ui.git

# 进入项目目录
cd dk-ui

# 安装依赖项
pnpm install
ps: 注意这里引用了联合指令,如没安装cnpm 请先安装cnpm 国外用户把根目录下的package.json scripts 里的 postinstall 命令 cnpm install --no-save @commitlint/cli@17.6.3 @commitlint/config-conventional@17.6.3 改为npm install --no-save @commitlint/cli@17.6.3 @commitlint/config-conventional@17.6.3

# CNPM安装
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 启动开发项目
pnpm dev:play

# 启动文档
pnpm dev:docs

# 发布
npm init
npm login
npm publish

```

## 🔧 开发工具和插件

请先阅读 [IDE 支持](https://cn.vuejs.org/guide/typescript/overview.html#ide-support)

编辑器强烈推荐使用 [Visual Studio Code](https://code.visualstudio.com/)，内置插件请务必安装以下几款：

- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) Vue3 官方开发插件
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) 用于支持在 TS 中 import `*.vue` 文件
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 代码格式校验，如果不安装，那么 [dk-eslint](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/dk-eslint) 则不生效
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) 用于检测代码中的拼写错误

## 🔓 命令说明

dk-plus 内部设置了很多的命令，在 [package.json](https://github.com/dk-plus-ui/dk-ui/blob/master/package.json) 中可进行查看。下面详细介绍每一条命令：

| script 字段 | 对应命令        | 命令说明         |
| ----------- | --------------- | ---------------- |
| dev:play    | pnpm dev:play   | 启动测试开发项目 |
| build:play  | pnpm build:play | 打包测试开发项目 |
| build       | pnpm build      | 打包组件库       |
| dev:docs    | pnpm dev:docs   | 启动开发文档项目 |
| build:docs  | pnpm build:docs | 打包开发文档项目 |
| format      | pnpm format     | 项目代码格式化   |

## 🚨 开发规范

主要源文件都在 [packages](https://github.com/dk-plus-ui/dk-ui/tree/master/packages) 目录下，其中每个子目录都有单独的 `README.md` 对指定目录进行说明，每个模块详细的规范参考下面文档:

- [dk-plus-components](https://github.com/dk-plus-ui/dk-ui/tree/master/packages/components/README.md) 创建新组件
- [dk-plus-components](https://github.com/dk-plus-ui/dk-ui/tree/master/packages/theme-chalk/README.md) 样式主题目录

## ⚠️ 提交规范

Git 允许我们在每次提交时，附带一个提交信息作为说明，当执行 `commit` 的时候，需要严格按照下方说明规范进行填写说明信息，提交信息必须是下面信息中的一个，后面跟随 `英文的冒号 + 空格

类型必须是下面类型之一，并对照类型描述填写。

| 类型      | 示例                                             | 描述                       |
| --------- | ------------------------------------------------ | -------------------------- |
| build     | git commit -m 'build: 打包\*\*\*配置'            | 修改打包配置               |
| ci        | git commit -m 'ci: 修改 ci 配置'                 | 修改 ci 配置               |
| docs      | git commit -m 'docs: 修改文档'                   | 修改文档                   |
| feat      | git commit -m 'feat: 新增\*\*\*组件'             | 新增组件                   |
| fix       | git commit -m 'fix: 修复\*\*\*bug'               | 修复 bug                   |
| perf      | git commit -m 'perf: 优化\*\*\*性能'             | 优化性能                   |
| refactor  | git commit -m 'refactor: 重构\*\*\*代码'         | 重构代码                   |
| style     | git commit -m 'style: 修改\*\*\*样式'            | 修改样式                   |
| test      | git commit -m 'test: 新增\*\*\*测试用例'         | 新增测试用例               |
| revert    | git commit -m 'revert: 回滚\*\*\*代码'           | 回滚代码                   |
| chore     | git commit -m 'chore: 修改\*\*\*配置'            | 修改配置                   |
| release   | git commit -m 'release: 发布\*\*\*版本'          | 发布版本                   |
| hooks     | git commit -m 'hooks: 新增\*\*\*                 | 开发                       |
| perfect   | git commit -m 'perfect: 完善\*\*\* '             | 完善之前代码块哪里的代码块 |
| utils     | git commit -m 'utils: 组件工具箱\*\*\*           | 更新工具箱                 |
| interface | git commit -m 'interface: 增加组件全局接口\*\*\* | 全局接口                   |
| deps      | git commit -m 'deps: 依赖升级                    | 全局接口                   |

可通过 [Markdown Emoji](https://tianyuhao.cn/emoji) 在 message 后面加入表情

## ✏️ 关于 PR

在你提交 `PR` 之前，请务必保证你 `fork` 的仓库是当前最新的代码，以免发生冲突。

1.克隆远程仓库到本地：

```shell
git clone <repository-url>
```

2.添加远程仓库：

```shell
git checkout -b <branch-name>
```

3.进行修改并提交到本地仓库：

```shell
git add .
git commit -m 'feat: 新增***组件'
```

4.推送分支到远程仓库

    ```shell
    git push origin <branch-name>
    ```

5.在远程仓库中创建 PR
在 GitHub 或 GitLab 等代码托管平台上，找到您刚刚推送的分支，并创建一个 PR。您可以在 PR 中提供有关您所做更改的详细信息和任何其他有关 PR 的注释。

6.等待审核和合并：
一旦您的 PR 提交后，团队成员将会对您的代码进行审核和讨论，并可能会提出更改建议。一旦所有问题得到解决并得到批准，您的 PR 将被合并到主分支中。

注意事项:
在提交 PR 之前，请确保您的本地分支是基于最新的主分支。
PR 的提交应该尽可能小，每个 PR 都应该只包含一组相关的更改。这使得审核更容易，也使得代码更容易维护。
为您的 PR 添加描述，让其他开发者了解您所做的更改及其目的

## 📰 财务支持

如果您觉得 dk-plus 帮助到了您，您可以请作者喝杯咖啡，以资鼓励。

<img width="200px" src="https://oss.cadwaladerss.com/dk-plus/images/zfb.jpg" />
<img width="200px" src="https://oss.cadwaladerss.com/dk-plus/images/wx.jpg" />

## 💌 非常感谢

感谢所有已经为 DK-plus [做出贡献的人](https://github.com/dk-plus-ui/dk-ui/graphs/contributors)！

<a href="https://github.com/dk-plus-ui/dk-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dk-plus-ui/dk-ui" />
</a>
