import React from 'react'
import { Button, Pagination } from 'antd'

export default class AntDemo extends React.Component{
    render(){
        return(
            <div>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        )
    }
}