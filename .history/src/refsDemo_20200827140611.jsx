import React from 'react'

export default class RefsDemo extends React.Component{
    constructor(props){
        super(props);
        this.username = React.createRef()
    }

    render(){
        return(
            <div>
                <input type="text" ref={ this.username } />
            </div>
        )
    }
}