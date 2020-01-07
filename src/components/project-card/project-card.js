import React from 'react'

const ProjectCard = props => {
    return (
        <div>
            <a href={props.liveUrl}>
                <img src={props.projectImage}/>
            </a>
            <a href={props.liveUrl}>
                <button ><i className="fas fa-eye"></i>Project</button>
            </a>
            <a href={props.githubUrl}>
                <button><i className="fab fa-github"></i>Github</button>
            </a>
            <p>{props.projectDescription}</p>
        </div>
    )
}

export default ProjectCard;