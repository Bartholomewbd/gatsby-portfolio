import React from 'react'

import aboutCardStyles from './about-card.module.scss'

const AboutCard = props => {
    return (
        <div className={aboutCardStyles.job}>
            <h3>{props.companyName}</h3>
            <h4>{props.jobTitle}</h4>
            <ul>
                {props.responsibilities.map(duty => <li>{duty}</li>)}
            </ul>
        </div>
    )
}

export default AboutCard