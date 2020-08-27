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
        const { userList } = this.state;
        return(
            <div>
                <h3>列表ListDemo</h3>
                {
                    userList.length ?
                    <ul>
                        {
                            userList.map((el, index) => {
                                return  <li key={ index }>
                                            <span>{ el.name }</span>
                                            <span>{ el.age }</span>
                                            <span>{ el.sex }</span>
                                        </li>
                            })
                        }
                    </ul> :
                    <p>数据加载中....</p>
                }
            </div>
        )
    }
}