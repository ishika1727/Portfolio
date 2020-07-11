import React from 'react';
import '../css/Nav.css';

class Nav extends React.Component {

    render() {
        return (
            <div className="navbar">
                <a href="/" className="navlink" >Home</a>
                <a href="/" className="navlink">About</a>
                <a href="/" className="navlink">Projects</a>
                <a href="/" className="navlink">Skills</a>
                <a href="/" className="navlink">Extras</a>
                <a href="/" className="navlink">Contact</a>
            </div>
        );
    }

}
export default Nav;


