import React from 'react'

export default class Child1 extends React.Component{
    constructor(){
        super();
        this.inputVal1 = React.createRef()
    }
    changeHandler(e){
       this.inputVal1 = e.target.value
    }
    render(){
        return(
            <div>
                Child1
                <input type="text" ref={ this.inputVal1 } onChange={ this.changeHandler.bind(this) } />
            </div>
        )
    }
}