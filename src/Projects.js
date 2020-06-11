import React from 'react';
import './Projects.css';

class Projects extends React.Component
{
    render()
    {
        return(
            <div className="projects-main">
                <div className="projects-head">
                    PROJECTS
                    <Projectcomponent project_name=""/>
                </div>
            </div>
        );
    }
}
class Projectcomponent extends React.Component
{
    constructor()
    {
        super();
        this.state={
            project_name: "Project Name",
            project_desc: "Project Desc",
            project_link: "Project link"
        };
    }
    render()
    {
        return(
            <div class="project-component-main">

            </div>
        );
    }
}

export default Projects