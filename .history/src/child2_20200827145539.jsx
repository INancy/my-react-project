import React from 'react'

export default class Child2 extends React.Component{
    constructor(){
        super();
        this.state= {
            inputVal2: 0
        }
    }
    componentDidMount(){
        this.setState({
            inputVal1: this.props.money
        })
    }
    changeHandler(e){
        this.setState({
            inputVal2: e.target.value
        })
    }
    render(){
        return(
            <div>
                Child2
                <input type="text" value={ this.state.inputVal2 } onChange={ this.changeHandler.bind(this) } />
            </div>
        )
    }
}