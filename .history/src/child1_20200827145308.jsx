import React from 'react'

export default class Child1 extends React.Component{
    constructor(){
        super();
        this.state= {
            inputVal1: 0
        }
    }
    changeHandler(e){
       this.inputVal1 = e.target.value
    }
    render(){
        return(
            <div>
                Child1
                <input type="text" value={ this.state.inputVal1 } onChange={ this.changeHandler.bind(this) } />
            </div>
        )
    }
}