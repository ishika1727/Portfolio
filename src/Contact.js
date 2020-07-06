import React from 'react';
import './css/Contact.css';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin} from "react-icons/ai";
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
                            <AiFillGithub
                                size={70}
                                style={{
                                    marginRight: "30px",
                                    textDecoration: "none",
                                    border: "none",
                                    color: "white",
                                    size: "50px"
                                }}
                            />
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/ishika1727/">
                            <AiFillLinkedin
                                size={70}
                                style={{
                                    marginRight: "30px",
                                    textDecoration: "none",
                                    border: "none",
                                    color: "white",
                                    size: "50px"
                                }}
                            />
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://twitter.com/ishika1727">
                            <AiFillTwitterSquare
                                size={70}
                                style={{
                                    marginRight: "30px",
                                    textDecoration: "none",
                                    border: "none",
                                    color: "white",
                                    size: "50px"
                                }}
                            />
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://medium.com/@ishikadubey2000">
                            <AiFillMediumSquare
                                size={70}
                                style={{
                                    marginRight: "30px",
                                    textDecoration: "none",
                                    border: "none",
                                    color: "white",
                                    size: "50px"
                                }}
                            />
                        </a>
                    </div>
                    <div className="icons">
                        <a href="mailto:ishikadubey2000@gmail.com">
                            <MdEmail
                                size={70}
                                style={{
                                    marginRight: "30px",
                                    textDecoration: "none",
                                    border: "none",
                                    color: "white",
                                    size: "50px"
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact