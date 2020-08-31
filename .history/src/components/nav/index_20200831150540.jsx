import React from 'react'
import { Link } from "react-router-dom";
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="home">Home页面</Link></li>
                    <li><Link to="/mine">Mine页面</Link></li>
                </ul>
            </div>
        )
    }
}