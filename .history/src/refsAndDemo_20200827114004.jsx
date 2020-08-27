import React from 'react'

export default class RefsAndDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num: ''
        }
    }
    render(){
        return(
            <div>Refs 和 DOM</div>
        )
    }
}