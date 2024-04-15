# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## 项目结构

```text
├─ /node_modules
├─ /public
|  └─ favicon.ico        <-- 网页图标
├─ /src
|  ├─ /api               <-- api目录
|  |  └─ index.jsx       <-- api库
|  ├─ /common            <-- 全局公用目录
|  |  ├─ /fonts          <-- 字体文件目录
|  |  ├─ /images         <-- 图片文件目录
|  |  ├─ /js             <-- 公用js文件目录
|  |  └─ /styles         <-- 公用样式文件目录
|  |  |  ├─ frame.styl   <-- 全部公用样式（import本目录其他全部styl）
|  |  |  ├─ reset.styl   <-- 清零样式
|  |  |  └─ global.styl  <-- 全局公用样式
|  ├─ /components        <-- 公共模块组件目录
|  |  ├─ /header         <-- 头部导航模块
|  |  |  ├─ index.jsx    <-- header主文件
|  |  |  └─ header.styl  <-- header样式文件
|  |  └─ ...             <-- 其他模块
|  ├─ /pages             <-- 页面组件目录
|  |  ├─ /home           <-- home页目录
|  |  |  ├─ index.jsx    <-- home主文件
|  |  |  └─ home.styl    <-- home样式文件
|  |  ├─ /login          <-- login页目录
|  |  |  ├─ index.jsx    <-- login主文件
|  |  |  └─ login.styl   <-- login样式文件
|  |  └─ ...             <-- 其他页面
|  ├─ /route             <-- 路由配置目录
|  ├─ /store             <-- Redux配置目录
|  ├─ globalConfig.jsx   <-- 全局配置文件
|  ├─ main.jsx           <-- 项目入口文件
|  └─ mock.jsx           <-- mock数据文件
├─ .eslintrc.cjs         <-- ESLint配置文件
├─.gitignore
├─ index.html            <-- HTML页模板
├─ package.json
├─ vite.config.js        <-- Vite配置文件
└─ yarn.lock
```


## 备注

一、与基于webpack的Create-React-App不同，Vite修改项目配置后，不需要重启项目即可生效。

二、

支持Sass/Scss，执行以下命令安装：

```text
yarn add -D sass
```

支持Less，执行以下命令安装：

```text
yarn add -D less
```

支持Stylus，执行以下命令安装：

```text
yarn add -D stylus
```

安装后，就可以直接使用以上对应的CSS预处理语言了，非常方便。

三、基于Vite脚手架的工程在src目录里并没有使用js文件，而是以jsx文件进行开发。默认情况下，js文件是不能正常加载的。在后续章节会讲解如何通过修改Vite配置来兼容js文件，但是仍然不推荐这么做。


## 参考

https://zhuanlan.zhihu.com/p/634471047
