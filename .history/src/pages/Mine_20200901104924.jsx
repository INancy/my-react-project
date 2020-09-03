import React from 'react'

export default class Mine extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        const params = new URLSearchParams(props.location.search);
        console.log(params)
    }
    render(){
        return(
            <div>Mine</div>
        )
    }
}