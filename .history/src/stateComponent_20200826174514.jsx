import React from 'react'

export default class StateComponent extends React.Component{
    /**
     * 组件的状态: state
     * React修改页面元素的改变，使用 state进行处理
    */
    constructor(props){
        super(props);
        this.state = {
            num: 10
        }
    }
    render() {
        return(
            <div>
                <h3>组件的State</h3>
                <p>{ this.state.num }</p>
            </div>
        )
    }
}