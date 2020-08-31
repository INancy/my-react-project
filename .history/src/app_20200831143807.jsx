import React from 'react'
import Home from './home'
import MyNav from './myNav'
import StateComponent from './stateComponent'
import ComponentsLife from './componentsLife'
import SetStateDemo from "./setStateDemo"
import IfDemo from './ifDemo'
import ListDemo from './listDemo'
import FormDemo from './formDemo'
import RefsAndDemo from './refsAndDemo'
import RefsDemo from './refsDemo'
import Parent from './parent'
import Compose from './compose'
import PropsTypeDemo from './propsTypeDemo'
import AntDemo from './antDEmo'
import FetchDemo from './fetchDemo'
import HomePage from './pages/Home'
import MinePage from './pages/Mine'
// 引入路由
import { Router, Route } from 'react-router'

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
                <ListDemo />
                <hr/>
                <h3>表单</h3>
                <h4>受控组件</h4>
                <FormDemo />
                <h4>非受控组件</h4>
                <RefsAndDemo />
                <RefsDemo />
                <hr/>
                <h4>React状态提升</h4>
                <Parent />
                <hr/>
                <h3>组合 VS 继承</h3>
                <Compose>
                    <div>我是组合效果</div>
                </Compose>
                <hr/>
                <h3>PropsType检查</h3>
                <PropsTypeDemo title="标题" />
                <hr/>
                <h3>Antd UI组件</h3>
                <AntDemo />
                <hr/>
                <h3>Fetch</h3>
                <FetchDemo />
                <hr/>
                <h3>React router</h3>
                <Router>
                    <Route path="/home" component={ HomePage } />
                    <Route path="/mine" component={ MinePage }>
                    </Route>
                </Router>
            </div>
        )
    }
}
export default App