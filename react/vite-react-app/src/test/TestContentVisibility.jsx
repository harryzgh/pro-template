import {Fragment} from 'react'
import './test.less'

export default function TestContentVisibility () {
    return <div className="g-wrap">
        {
            new Array(1000).fill(0).map((item,index) => {
                return <Fragment key={index}>
                    // 模块 1
                    <div className="paragraph">
                        <p>Lorem Start!</p>   
                        <img src="https://s1.ax1x.com/2023/02/20/pSX1xMV.png" alt="" />
                        <p>Lorem End!</p>  
                    </div>
                    // 模块 2
                    <div className="paragraph">
                        <p>Lorem Start!</p>   
                        <img src="https://s1.ax1x.com/2023/02/20/pSX1xMV.png" alt="" />
                        <p>Lorem End!</p>  
                    </div>
                </Fragment>
            })
        }
    </div>
}