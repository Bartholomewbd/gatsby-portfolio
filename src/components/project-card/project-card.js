import React from 'react'

import projectStyles from './project-card.module.scss'

const ProjectCard = props => {
    return (
        <div className={projectStyles.project}>
            <a href={props.liveUrl}>
                <img src={props.projectImage} alt={props.imageAlt}/>
            </a>
            <a href={props.liveUrl}>
                <button className="btn-light"><i className="fas fa-eye"></i> Project</button>
            </a>
            <a href={props.githubUrl}>
                <button className="btn-dark"><i className="fab fa-github"></i> Github</button>
            </a>
            <p>{props.projectDescription}</p>
        </div>
    )
}

export default ProjectCard;