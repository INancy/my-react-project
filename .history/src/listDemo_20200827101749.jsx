import React from 'react'

export default class ListDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num: 1
        }
    }
    render(){
        return(
            <div>
                列表ListDemo
            </div>
        )
    }
}