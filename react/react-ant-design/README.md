# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 项目核心依赖

Node.js 18.12.1
create-react-app 5.0.1
react 18.2.0
react-router-dom 6.4.5
antd 5.0.6
node-sass 8.0.0
sass-loader 12.3.0
less 4.1.3
less-loader 11.1.0
stylus 0.59.0
stylus-loader 7.1.0
axios 1.2.1
history 4.10.1
mockjs 1.1.0
react-redux 8.0.5
@reduxjs/toolkit 1.9.1
http-proxy-middleware 2.0.6

## 项目功能

1 初始化项目

• 1.1 使用create-react-app新建项目
• 1.2 精简项目
2 Webpack配置
• 2.1 配置国内镜像源
• 2.2 暴露Webpack
• 2.3 支持Sass/Scss
• 2.4 支持Less
• 2.5 支持Stylus
• 2.6 设置路径别名
• 2.7 禁止build项目生成map文件
3 项目架构搭建
• 3.1 项目目录结构设计
• 3.2 关于样式命名规范
• 3.3 设置全局公用样式
4 引入Ant Design 5.x
• 4.1 安装Ant Design
• 4.2 设置Antd为中文语言
5 页面开发
• 5.1 构建Login页面
• 5.2 构建Home页面
• 5.3 构建Account页面
• 5.4 通过一级路由实现页面跳转
• 5.5 在React组件中实现页面路由跳转
• 5.6 在非React组件中实现页面路由跳转
6 组件开发
• 6.1 创建自定义SVG图标Icon组件
• 6.2 创建Header组件
• 6.3 引入Header组件
• 6.4 组件传参
7 二级路由配置
• 7.1 创建二级路由的框架页面
• 7.2 配置二级路由
• 7.3 获取当前路由地址
8 React Developer Tools浏览器插件
9 Redux及Redux Toolkit
• 9.1 安装Redux及Redux Toolkit
• 9.2 创建全局配置文件
• 9.3 创建用于主题换肤的store分库
• 9.4 创建store总库
• 9.5 引入store到项目
• 9.6 store的使用：实现亮色/暗色主题切换
• 9.7 非Ant Design组件的主题换肤
• 9.8 store的使用：实现主题色切换
• 9.9 安装Redux调试浏览器插件
10 基于axios封装公用API库
• 10.1 安装axios
• 10.2 封装公用API库
• 10.3 Mock.js安装与使用
• 10.4 发起API请求：实现登录功能
11 一些细节问题
• 11.1 解决Modal.method跟随主题换肤的问题
• 11.2 路由守卫
• 11.3 设置开发环境的反向代理请求
12 build项目
13 项目Git源码

## 项目目录结构设计

```text
├─ /config               <-- webpack配置目录
├─ /node_modules
├─ /public
|  ├─ favicon.ico        <-- 网页图标
|  └─ index.html         <-- HTML页模板
├─ /scripts              <-- node编译脚本
├─ /src
|  ├─ /api               <-- api目录
|  |  └─ index.js        <-- api库
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
|  |  |  ├─ index.js     <-- header主文件
|  |  |  └─ header.styl  <-- header样式文件
|  |  └─ ...             <-- 其他模块
|  ├─ /pages             <-- 页面组件目录
|  |  ├─ /home           <-- home页目录
|  |  |  ├─ index.js     <-- home主文件
|  |  |  └─ home.styl    <-- home样式文件
|  |  ├─ /login          <-- login页目录
|  |  |  ├─ index.js     <-- login主文件
|  |  |  └─ login.styl   <-- login样式文件
|  |  └─ ...             <-- 其他页面
|  ├─ /route             <-- 路由配置目录
|  ├─ /store             <-- Redux配置目录
|  ├─ globalConfig.js    <-- 全局配置文件
|  ├─ index.js           <-- 项目入口文件
|  ├─.gitignore
|  ├─ package.json
|  ├─ README.md
|  └─ yarn.lock
```
