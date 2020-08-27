import React from 'react'
import Child1 from './child1'
import Child2 from './child2'

export default class Parent extends React.Component{
    render(){
        return(
            <div>
                <h3>Parent</h3>
                <h4>Child1 - <Child1 /></h4>
                <h4>Child2 - <Child2 /></h4>
            </div>
        )
    }
}