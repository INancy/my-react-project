import React from 'react'
import querystring from 'querystring'

export default class Mine extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        /* const params = new URLSearchParams(props.location.search);
        console.log(params.get('name')) */
        const val = querystring.parse(props.location.search);
        console.log(val)
    }
    render(){
        return(
            <div>Mine</div>
        )
    }
}