import React from 'react'

export default class RefsAndDemo extends React.Component{
    constructor(props){
        super(props);
        this.helloDiv = React.createRef()
    }
    componentDidMount(){
        console.log(this.helloDiv.current)
    }
    render(){
        return(
            <div>
                Refs 和 DOM
                <div ref={ this.helloDiv }>Hello</div>
            </div>
        )
    }
}