import React from 'react';
import '../css/Aboutme.css';
import backi from '../assets/back2.png';

class Aboutme extends React.Component {
    render() {
        return (
            <div className="home-main">
                <div className="home-head">
                    About Me
                </div>

                <div className="home">
                    <div className="home-img">
                        <img id="back" src={backi} alt="background image"></img>
                    </div>
                    <div className="home-text">
                        <div className="home-text-2">
                            From writing basic code in C++ when I was 13, to now being a web developer has been a great journey. 
                            I am an Experienced developer with a demonstrated history of working in the computer software industry, 
                            skilled in Frontend web development , Management, and Media Outreach. 
                            Strong operations professional with a Bachelor of Technology - BTech focused in Information Technology from Vellore Institute of Technology. 
                            Intially I was into app dev, but it did not made me happy. 
                            I learnt HTML for a curriculum course and my interest grew as I started working with javascript. 
                            Now, I am learning ReactJS and paving my way in frontend web development. 
                            I will definitely make my way into backend development very soon and grow as a full stack developer.
                            I am also into competitive programming, and love making my contributions in open-source. It is th best way to collaborate and learn.
                            Apart from this, I enjoy music and binge watching.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutme