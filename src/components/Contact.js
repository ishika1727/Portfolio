import React from 'react';
import '../css/Contact.css';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillMediumSquare } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-main">
                <div className="contact-head">
                    Contact Me
                </div>
                <div className="contact-comp">
                    <div className="icons">
                        <a href="https://github.com/ishika1727">
                            <AiFillGithub/>
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/ishika1727/">
                            <AiFillLinkedin/>
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://twitter.com/ishika1727">
                            <AiFillTwitterSquare/>
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://medium.com/@ishikadubey2000">
                            <AiFillMediumSquare/>
                        </a>
                    </div>
                    <div className="icons">
                        <a href="mailto:ishikadubey2000@gmail.com">
                            <MdEmail />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact