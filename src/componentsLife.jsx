import React from 'react'

export default class ComponentsLife extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            num: 10
        }
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){    
        console.log('componentDidMount');
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    changeHandler= ()=> {
        this.setState({
            // eslint-disable-next-line
            num: this.state.num += 1
        })
    }
    clickChange =()=> {
        this.props.clickChangeTitle('我是儿子的数据')
    }
    render(){
        const { num } = this.state;
        return(
            <div>
                <h3>生命周期函数 {num} - { this.props.title }</h3>
                <button onClick={ this.changeHandler }>修改</button>
                <hr/>
                <button onClick={ this.clickChange }>修改文本</button>
            </div>
        )
    }
}