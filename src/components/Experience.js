import React from 'react';
import '../css/Experience.css';

class Experience extends React.Component {
    render() {
        return (
            <div className="experience-main">
                <div className="exp-head">
                    Experience of Work
                </div>
                <div className="exp-box">
                    <Expcomponent
                        name="Apple Developers Group"
                        work="Events Head"
                        timestart="May, 2020"
                        timeend="Ongoing"
                    />
                    <Expcomponent
                        name="Microsoft"
                        work="Microsoft Student Partner"
                        timestart="September, 2019"
                        timeend="Ongoing"
                    />
                </div>
                <div className="exp-box">
                    <Expcomponent
                        name="Joynt"
                        work="Community Outreach Intern"
                        timestart="March, 2020"
                        timeend="May, 2020"
                    />
                    <Expcomponent
                        name="STC"
                        work="Core Committee Member"
                        timestart="January, 2019"
                        timeend="December, 2019"
                    />
                </div>
            </div>
        );
    }
}
class Expcomponent extends React.Component {
    render() {
        return (
            <div className="exp-component">
                <div className="exp-name">
                    {this.props.work} at {this.props.name}
                </div>
                <div className="exp-time">
                    {this.props.timestart} - {this.props.timeend}
                    </div>
            </div>
        );
    }
}

export default Experience