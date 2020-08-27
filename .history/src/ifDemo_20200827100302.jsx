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
    render(){
        let showView = this.state.isLogin ? <div>iwen</div> : <div>请登录</div>
        return(
            <div>
                条件渲染:{ showView }
            </div>
        )
    }
}