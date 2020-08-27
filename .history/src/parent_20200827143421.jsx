import React from 'react'
import Child1 from './child1'
import Child2 from './child2'

export default class Parent extends React.Component{
    render(){
        return(
            <div>
                Parent
                <Child1 />
                <Child2 />
            </div>
        )
    }
}