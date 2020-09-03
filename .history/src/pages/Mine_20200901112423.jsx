import React from 'react'
import querystring from 'querystring'

export default class Mine extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        /* const params = new URLSearchParams(props.location.search);
        console.log(params.get('name')) */
        const val = querystring.parse(props.location.search);
        console.log(val['?name'])
    }
    clickHandle(){
        console.log('333333333')
        console.log(this.props)
    }
    render(){
        return(
            <div>
                Mine
                <button onClick={ this.clickHandle.bind(this) }>回到Home页</button>
            </div>
        )
    }
}