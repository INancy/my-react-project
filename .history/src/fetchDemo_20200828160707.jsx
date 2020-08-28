import React from 'react'

export default class FetchDemo extends React.Component{

    componentDidMount(){
        fetch('http://iwenwiki.com/api/blueberryapi/getINdexBanner.php')
        .then(res=> {
            return res.json()
        })
        .then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }
    render(){
        return(
            <div>Fetch</div>
        )
    }
}