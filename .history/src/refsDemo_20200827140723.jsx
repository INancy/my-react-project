import React from 'react'

export default class RefsDemo extends React.Component{
    constructor(props){
        super(props);
        this.username = React.createRef()
    }
    clickHandler(){
        console.log(this.username.current)
    }
    render(){
        return(
            <div>
                <input type="text" ref={ this.username } />
                <button onClick={ this.clickHandler.bind(this) }>en</button>
            </div>
        )
    }
}