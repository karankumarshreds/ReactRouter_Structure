import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import './Navbar.css';

class NavBar extends Component {
    loginHandler() {    
        //this redirects to /soda
        this.props.history.push("/soda");
    }
    render() {
        return(
            <div className="NavBar">
                <NavLink exact activeClassname="active" to="/">Home Page</NavLink>
                <NavLink exact activeClassname="active" to="/soda">SODA</NavLink>
                <NavLink exact activeClassname="active" to="/chips">CHIPS</NavLink>
                <NavLink exact activeClassname="active" to="/chocolates">CHOCOLATES</NavLink>
                <button onClick={this.loginHandler.bind(this)}>LOGIN</button>
            </div>
        )
    }
}
// Useed to use the history.push function 
// since NavBar isn't primarily a Router Component
export default withRouter(NavBar);