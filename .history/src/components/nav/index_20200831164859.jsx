import React from 'react'
import { Link, NavLink } from "react-router-dom";
import '../../css/index.css'
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/">Home页面</Link></li>
                    <li><Link to="/mine">Mine页面</Link></li>
                    <li><Link to="/mine/center">Mine页面</Link></li>
                    <li><NavLink to="/">Home页面1</NavLink></li>
                    <li><NavLink to="/mine">Mine页面1</NavLink></li>
                    <li><NavLink to="/mine/center">Mine页面1</NavLink></li>
                </ul>
            </div>
        )
    }
}