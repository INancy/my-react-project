import React from 'react'

export default class myNav extends React.Component{
    render(){
        return(
            <div>
                <ul>
                   { this.props.nav.map((elment, index)=> {
                       return <li key={ index }>{ elment }</li>
                    })
                   }
                </ul>
            </div>
        )
    }
}