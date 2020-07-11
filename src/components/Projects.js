import React from 'react';
import '../css/Projects.css';


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
                    name="Port Scanner"
                    code="https://github.com/vinitshahdeo/PortScanner"
                    desc="A basic Port Scanner using Python with an Express Server to test."
                    imag="https://miro.medium.com/max/1400/1*yBAWM_OlS7NG5cL_DIkiYQ.png"
                />
                <Projectcomponent
                    name="Stress Fit"
                    code="https://github.com/ishika1727/Stress-master"
                    desc="A website to help people overcome stress and detect level of stress in their lives by giving a basic stress test."
                    imag="https://www.qminder.com/resources/img/blog/stress-management-tips.png"
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
                        <a href={this.props.code}  className="pro-link">Click for Source Code</a>
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