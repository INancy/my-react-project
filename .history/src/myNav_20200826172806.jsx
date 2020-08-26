import React from 'react'

export default class myNav extends React.Component{
    render(){
        return(
            <div>
                <ul>
                   { this.props.nav.map((el, index)=> {
                       return <li key={ index }>{ el }</li>
                    })
                   }
                </ul>
            </div>
        )
    }
}