import React from 'react'
import Child1 from './child1'
import Child2 from './child2'

export default class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            money: 1
        }
    }
    render(){
        return(
            <div>
                <h3>Parent</h3>
                <h4>人民币 - <Child1 money={ this.state.money }/></h4>
                <h4>美元 - <Child2 money={ this.state.money } /></h4>
            </div>
        )
    }
}