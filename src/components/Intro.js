import React from 'react';
import '../css/Intro.css';
import me from '../assets/me.png';
class Intro extends React.Component {
    render() {
        return (
            <div className="main-intro">
                <div className="intro-text" >
                    <div className="intro-text-1">I am Ishika Dubey</div>
                    <br></br>
                    <div className="intro-text-2">Glad to see you here! Please take a look around.</div>
                </div>
                <div className="intro-img">
                    <img
                        src={me}
                        alt="Ishika Dubey"
                        id="intro-image"
                    />
                </div>

            </div>
        );
    }
}
export default Intro;