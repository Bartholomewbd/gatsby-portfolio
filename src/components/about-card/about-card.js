import React from 'react'

const AboutCard = props => {
    return (
        <div>
            <h3>{props.companyName}</h3>
            <h4>{props.jobTitle}</h4>
            <ul>
                {props.responsibilities.map(duty => <li>{duty}</li>)}
            </ul>
        </div>
    )
}

export default AboutCard