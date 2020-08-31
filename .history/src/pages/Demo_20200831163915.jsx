import React from 'react'

const Demo = (props)=> {
    console.log(props)
    return(
        <div>
           Hello Center{ props.name }
        </div>
    )
}
export default Demo