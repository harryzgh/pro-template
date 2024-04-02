// import "core-js"
// import "core-js/es/promise"
import { sum } from "./js/sum"
// 引入 Css 资源，Webpack才会对其打包
import "./css/index.css"
console.log("hello main")
console.log(sum(1, 2, 3, 4, 5))

const obj =  {
    useBuiltIns: "usage", 
    corejs: { version: "3", proposals: true } 
}
console.log(sum(1, 2, 3, 4))
console.log('tes++++---9990(())(0ssss', obj)
console.log('so da():', [1, 2, 3, 4].includes(1))

// 添加promise代码
const promise = Promise.resolve()
promise.then(() => {
  console.log("hello promise")
})

console.log('test+++++ddd233)+++00000)')

document.getElementById("btn").addEventListener('click', function () {
    // eslint会对动态导入语法报错，需要修改eslint配置文件
    // webpackChunkName: "count"：这是webpack动态导入模块命名的方式
    // "count"将来就会作为[name]的值显示。
    import(/* webpackChunkName: "count" */ "./js/count.js").then(modul => {
        console.log('test+++++829129000', modul)
        console.log('test+++++829129', modul.default(10, 1))
    })
})