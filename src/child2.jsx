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
            inputVal2: this.props.money * 7
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
                Child2 - <span>{this.props.money * 7 } </span>
                <input type="text" value={ this.state.inputVal2 } onChange={ this.changeHandler.bind(this) } />
            </div>
        )
    }
}