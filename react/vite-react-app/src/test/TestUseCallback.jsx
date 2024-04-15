
import { useState, useCallback } from 'react'
import Button from '../pages/component/Button.jsx'

export default function TestUseCallback () {
  // console.log('hello-App')
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const handleClickButton1 = () => {
      setCount1(count1 + 1);
  };
  // useCallback 如果依赖项数组为空
  // 1、组件每次因为count1/count3更改而更新时，都不会执行useCallback函数，且不会返回新的handleClickButton2函数
  // 2、每次点击Button2时，即使执行了useCallback，也不会返回新的handleClickButton2函数
  const handleClickButton2 = useCallback(() => {
      console.log('test++', count2)
      setCount2(count2 + 1);
  }, []);
  return <div>
        <div><Button onClickButton={handleClickButton1}>Button1</Button></div>
        <div><Button onClickButton={handleClickButton2}>Button2</Button></div>
        <div>        
            <Button  onClickButton={() => {setCount3(count3 + 1);}}>          
                Button3       
            </Button>      
        </div>
    </div>
}