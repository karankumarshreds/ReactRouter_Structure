import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

class NavBar extends Component {
    render() {
        return(
            <div className="NavBar">
                <NavLink exact activeClassname="active" to="/">Home Page</NavLink>
                <NavLink exact activeClassname="active" to="/soda">SODA</NavLink>
                <NavLink exact activeClassname="active" to="/chips">CHIPS</NavLink>
                <NavLink exact activeClassname="active" to="/chocolates">CHOCOLATES</NavLink>
            </div>
        )
    }
}

export default NavBar;