import React from 'react'
import PropTypes from 'prop-types'

export default class ProsTypeDemo extends React.Component{
    render(){
        return(
            <div>PropsTypeDemo: { this.props.title }</div>
        )
    }
}
// 你可以在任何 PropTypes 属性后面加上 `isRequired` ，确保
// 这个 prop 没有被提供时，会打印警告信息。
ProsTypeDemo.propTypes = {
    title: PropTypes.string.isRequired
}