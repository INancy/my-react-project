import React from 'react'
import Home from './home'
import MyNav from './myNav'

//用类的形式创建组件, HOOK形式
class App extends React.Component{
    // 渲染函数
    render() {
        return (
            <div>
                <h1>Hello React Component</h1>
                <h3>开始学习React!!!</h3>
                <Home />
                <MyNav />
            </div>
        )
    }
}
export default App