import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@/common/less/frame.less'
import { ConfigProvider } from 'antd'
// 引入Ant Design中文语言包
import zhCN from 'antd/locale/zh_CN'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
)
