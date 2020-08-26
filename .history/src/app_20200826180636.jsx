import React from 'react'
import Home from './home'
import MyNav from './myNav'
import StateComponent from './stateComponent'
import componentsLife from './componentsLife'

//用类的形式创建组件, HOOK形式
class App extends React.Component{
    // 渲染函数
    render() {
        const navHomeList = ['视频', '学习', '首页'];
        const navList = ['WEB', 'Java', 'Node']
        return (
            <div>
                <h1>Hello React Component</h1>
                <h3>开始学习React!!!</h3>
                <Home />
                <MyNav nav={navHomeList} title="路径导航" />
                <MyNav nav={navList} title="学习导航" />
                <hr/>
                <StateComponent />
                <hr/>
                <componentsLife />
            </div>
        )
    }
}
export default App