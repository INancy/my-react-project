import React from 'react'

export default class FormDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            val: ''
        }
    }
    submitHandler(e){
        //e.preventDefault();
        console.log(this.state.val)
    }
    onChangeHandler(e){
        this.setState({
            val: e.target.value
        })
    }
    render(){
        return(
            <div>
                <h3>表单</h3>
                <form onSubmit={ this.submitHandler.bind(this) }>
                    <input type="text" value={ this.state.val } onChange={ this.onChangeHandler.bind(this) } />
                    <input type="submit" value="提交" />
                </form>
            </div>
        )
    }
}