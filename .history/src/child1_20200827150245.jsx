import React from 'react'

export default class Child1 extends React.Component{
    constructor(){
        super();
        this.state= {
            inputVal1: 0
        }
    }
    componentWillMount(){
        this.setState({
            inputVal1: this.props.money
        })
    }
    changeHandler(e){
        this.setState({
            inputVal1: e.target.value
        })
    }
    render(){
        return(
            <div>
                Child1 - <span>{this.props.money } </span>
                <input type="text" value={ this.state.inputVal1 } onChange={ this.changeHandler.bind(this) } />
            </div>
        )
    }
}