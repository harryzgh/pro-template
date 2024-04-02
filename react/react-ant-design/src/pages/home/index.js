import { Button, theme, Modal } from 'antd'
import './home.less'
import { useNavigate } from 'react-router-dom'
import { logout, goto } from '../../api'

const { useToken } = theme
function Home() {
    // 创建路由钩子
    const navigate = useNavigate()
    const { token } = useToken()
    const [modal, contextHolder] = Modal.useModal()

    // 退出登录
    const exit = () => {
        modal.confirm({
            title: '是否退出登录？',
            onOk() {
                logout()
            },
        })
    }
    return (
        <div className="P-home">
            <h1 style={{color: token.colorText}}>Home Page</h1>
            <div className="ipt-con">
                <Button onClick={()=>{goto('/account')}}>组件外跳转</Button>
            </div>
            <div className="ipt-con">
                <Button type="primary" onClick={()=>{navigate('/login')}}>返回登录</Button>
                <Button type="primary" onClick={exit}>退出登录</Button>
            </div>
            {
                // 这是最终解决Modal.method跟随换肤的关键，contextHolder在组件DOM中随便找个地方放就行
                contextHolder
            }
       </div>
   )
}

export default Home