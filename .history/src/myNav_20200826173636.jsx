import React from 'react'

export default class MyNav extends React.Component{
    render(){
        return(
            <div>
                { /* Jsx语法 */ }
                <h3>{ this.props.title }</h3>
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