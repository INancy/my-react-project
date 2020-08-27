import React from 'react'

export default class ListDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userList: [
                {
                    name: 'WEB',
                    age: 18,
                    sex: '男',
                    jobs: [1, 2, 3]
                },
                {
                    name: 'JAVA',
                    age: 20,
                    sex: '女',
                    jobs: [4, 5, 6]
                },
                {
                    name: 'Python',
                    age: 18,
                    sex: '男',
                    jobs: [7, 8, 9]
                }
            ]
        }
    }

    changeHandler(){
        this.setState({
            userList: this.state.userList.concat({name: 'Node', age: 20, sex: '女', jobs: ['hh']})
        })
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
                                return  <li>
                                            <span>{ el.name }</span> ------
                                            <span>{ el.age }</span> ------
                                            <span>{ el.sex }</span>
                                            <div>
                                                {
                                                    el.jobs.map((item, i) => {
                                                        return <span key={ i }>{ item }</span>
                                                    })
                                                }
                                            </div>
                                        </li>
                            })
                        }
                    </ul> :
                    <p>数据加载中....</p>
                }
                <button onClick={ this.changeHandler.bind(this) }>添加数据</button>
            </div>
        )
    }
}