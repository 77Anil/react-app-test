import React, { Component } from 'react';
import {menuItems} from "./MenuItem"
import './Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <header className="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="./" className="navbar-brand">Bootstrap Menu</a>
                    </div>
                    <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                        <ul className="nav navbar-nav navbar-right">
                            {
                                menuItems.map((item,index)=>{
                                    return (
                                        <li>
                                           <a href={item.url}>{item.title}</a>
                                        </li>
                                    )
                                })
                            }
                           
                            
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Navbar