import { createHashRouter, Navigate } from 'react-router-dom'
import Entry from '@/pages/entry'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Account from '@/pages/account'
import { globalConfig } from '@/globalConfig'

// 全局路由
export const globalRouters = createHashRouter([
    // 对精确匹配"/login"，跳转Login页面
    {
        path: '/login',
        element: <Login />,
    },{
        path: '/',
        element: <Entry />,
        children: [
            // 精确匹配"/home"，跳转Home页面
            {
                path: '/home',
                element: <Home />,
            },
            // 精确匹配"/account"，跳转Account页面
            {
                path: '/account',
                element: <Account />,
            },
            // 如果URL没有"#路由"，跳转Home页面
            {
                path: '/',
                element: <Home />,
            },
            // 未匹配，，跳转Login页面
            {
                path: '*',
                element: <Navigate to="/login" />,
            }
        ]
    }
])

// 路由守卫
export function PrivateRoute(props) {
    console.log('test+++++', window.localStorage.getItem(globalConfig.SESSION_LOGIN_INFO))
    // 判断localStorage是否有登录用户信息，如果没有则跳转登录页
    return window.localStorage.getItem(globalConfig.SESSION_LOGIN_INFO) ? (
        props.children
    ) : (
        <Navigate to="/login" />
    )
}