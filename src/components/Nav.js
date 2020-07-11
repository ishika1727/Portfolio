import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../css/Nav.css';

class Nav extends React.Component {

    render() {
        return (
            <div className="navbar">
                <Link smooth to="/#About" className="navlink">About</Link>
                <Link smooth to="/#Projects" className="navlink">Projects</Link>
                <Link smooth to="/#Skills" className="navlink">Skills</Link>
                <Link smooth to="/#Experience" className="navlink">Experience</Link>
                <Link smooth to="/#Contact" className="navlink">Contact</Link>
            </div>
        );
    }

}
export default Nav;


