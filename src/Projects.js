import React from 'react';
import './css/Projects.css';


class Projects extends React.Component {
    render() {
        return (
            <div className="projects-main">
                <div className="projects-head">
                    Projects
                </div>
                <Projectcomponent
                    name="Nutricate"
                    code="https://github.com/ishika1727/Nutricate"
                    desc="Fully functioning web app to help people maintain a healthy life by having a balanced diet."
                    imag="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSs7MhwGZUwyQAqWE1YQQTJw6wXQzP1WTeUfPrJ3bDXKc2EyqAo&usqp=CAU"
                />
                <Projectcomponent
                    name="Nutricate"
                    code="https://github.com/ishika1727/Nutricate"
                    desc="Fully functioning web app to help people maintain a healthy life by having a balanced diet."
                    imag="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSs7MhwGZUwyQAqWE1YQQTJw6wXQzP1WTeUfPrJ3bDXKc2EyqAo&usqp=CAU"
                />
                <Projectcomponent
                    name="Nutricate"
                    code="https://github.com/ishika1727/Nutricate"
                    desc="Fully functioning web app to help people maintain a healthy life by having a balanced diet."
                    imag="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSs7MhwGZUwyQAqWE1YQQTJw6wXQzP1WTeUfPrJ3bDXKc2EyqAo&usqp=CAU"
                />

            </div>
        );
    }
}
class Projectcomponent extends React.Component {

    render() {
        return (
            <div className="project">
                <div className="project-text">
                    <div className="project-name">
                        {this.props.name}
                    </div>
                    <div className="project-desc">
                        {this.props.desc}
                    </div>
                    <div className="project-link">
                        <a href={this.props.code}>Click for Source Code</a>
                    </div>
                </div>
                <div className="project-img">
                    <img src={this.props.imag} className="pro-img" />
                </div>
            </div>
        );
    }
}

export default Projects