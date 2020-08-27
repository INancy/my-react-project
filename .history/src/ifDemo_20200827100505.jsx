import React from 'react'

export default class IfDemo extends React.Component{
    /**
     * 常用的应用场景:
     * 1、对视图条件进行切换
     * 2、做缺省值
    */
    constructor(props){
        super(props);
        this.state={
            isLogin: false
        }
    }
    clickHandler(){
        this.setState({
            isLogin: true
        })
    }
    render(){
        let showView = this.state.isLogin ? <div>iwen</div> : <div>请登录</div>
        return(
            <div>
                条件渲染:{ showView }
                <button onClick={ this.clickHandler.bind(this) }>登录</button>
            </div>
        )
    }
}