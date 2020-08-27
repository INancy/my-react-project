import React from 'react'

export default class RefsDemo extends React.Component{
    constructor(props){
        super(props);
        this.username = React.createRef();
        this.passworld = React.createRef();
    }
    clickHandler(){
        console.log(this.username.current.value)
        console.log(this.passworld.current.value)
    }
    render(){
        return(
            <div>
                <label>用户名:<input type="text" ref={ this.username } /></label>
                <label>密码:<input type="text" ref={ this.passworld } /></label>
                <button onClick={ this.clickHandler.bind(this) }>en</button>
            </div>
        )
    }
}