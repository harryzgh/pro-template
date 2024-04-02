import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { globalRouters } from '@/router'
// 引入Ant Design中文语言包
import zhCN from 'antd/locale/zh_CN'
// 全局样式
import '@/common/less/frame.less'
import { store } from '@/store'
import { Provider } from 'react-redux'
// import './api/mock'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={globalRouters} />
    </ConfigProvider>
  </Provider>
);
