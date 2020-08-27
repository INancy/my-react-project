import React from "react";

export default class SetStateDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num: 0
        }
    }
    async change(){
        // 同步
        /* this.setState({
            // eslint-disable-next-line
            num: this.state.num +1
        },()=> {
            console.log(this.state.num, '1111')
        }) */
        await this.setStateAsync({num: this.state.num+1})
        console.log(this.state.num)
    }
    // promise
    setStateAsync(state){
        return new Promise(resolve => {
            this.setState(state,resolve)
        })
    }
    render(){
        return(
            <div>
                SetStateDemo是同步异步
                <p>{ this.state.num }</p>
                <button onClick={ this.change.bind(this) }>修改</button>
            </div>
        )
    }
}