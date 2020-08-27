import React from 'react'
import Home from './home'
import MyNav from './myNav'
import StateComponent from './stateComponent'
import ComponentsLife from './componentsLife'
import SetStateDemo from "./setStateDemo"
import IfDemo from './ifDemo'
import listDemo from './listDemo'

//用类的形式创建组件, HOOK形式
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: '我是生命周期文本'
        }
    }
    clickChangeTitle= (data)=> {
        this.setState({
            title: data
        })
    }
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
                <ComponentsLife title={this.state.title} clickChangeTitle={this.clickChangeTitle }/>
                {/* <button onClick={ this.clickChangeTitle }>修改生命周期函数文本</button> */}

                <hr/>
                <SetStateDemo />
                <hr/>
                <h3>条件渲染</h3>
                <IfDemo />
                <hr/>
                <h3>列表渲染</h3>
                <listDemo />
            </div>
        )
    }
}
export default App