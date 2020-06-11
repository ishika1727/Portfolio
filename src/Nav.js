import React from 'react';
import './Nav.css';

class Nav extends React.Component
{
    
    render()
    {
        return(
            <div className="navbar">
                <button >Home</button>
                <button>About Me</button>
                <button>Projects</button>
                <button>Skills</button>
                <button>Extras</button>
                <button>Contact</button>
                
            </div>
        );
    }
    
}
export default Nav;