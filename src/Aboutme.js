import React from 'react';
import './Aboutme.css';
import backi from './assets/back2.png';

class Aboutme extends React.Component
{
    render()
    {
        return(
            <div className="home-main">
                <div className="home-head">
                    ABOUT ME
                </div>
                
            <div className="home">
                 <div className="home-img">
                    <img id="back" src={backi} alt="background image"></img>
                </div>
                <div className="home-text">
                    <div className="home-text-1">
                        I am a Web Developer
                    </div>
                    <br></br>
                    <div className="home-text-2">
                    I am a frontend web developer, currently pursuing my B.tech in Information Technology from Vellore Institute of Technology, Vellore. From writing basic code in C++ when I was 13, to now being a web developer has been a great journey. 
                    I am a front end web developer and a designer with a keen interest in startups. I graduated with a degree in business and specialisation in finance. But coming from a different background hasn’t deterred my determination to make it in this industry that I have come to adore. It's like they say, when you find your true calling there’s nothing stopping you. Now, I do understand that I’m a work in progress but I always believe that perseverance and true grit can outweigh anything.
From being a Google Udacity Scholar to an active member in WTM and GDG, this industry has taught me the power of community and how many people it can benefit from a collaborative learning atmosphere.  I am an extremely extroverted, harworking, creative and out of the box thinker, I’m always pushing myself to be better and do better, not just professionally but also as a person. In my free time you can find me illustrating or reading about smart tech or running after my six doggos.
                    </div>
                </div>
               
            </div>
            </div>
        );
    }
}

export default Aboutme