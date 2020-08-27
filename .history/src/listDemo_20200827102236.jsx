import React from 'react'

export default class ListDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userList: [
                {
                    name: 'WEB',
                    age: 18,
                    sex: '男'
                },
                {
                    name: 'JAVA',
                    age: 20,
                    sex: '女'
                },
                {
                    name: 'Python',
                    age: 18,
                    sex: '男'
                }
            ]
        }
    }
    render(){
        return(
            <div>
                列表ListDemo
            </div>
        )
    }
}