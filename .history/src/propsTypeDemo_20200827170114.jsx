import React from 'react'
import PropTypes from 'prop-types'

export default class ProsTypeDemo extends React.Component{
    render(){
        return(
            <div>PropsTypeDemo: { this.props.title }</div>
        )
    }
}
ProsTypeDemo.propTypes = {
    title: PropTypes.number
}