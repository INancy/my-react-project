import React from 'react'

export default class MyNav extends React.Component{
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