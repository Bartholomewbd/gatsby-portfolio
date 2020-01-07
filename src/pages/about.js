import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'

import aboutStyles from '../styles/about.module.scss'
import AboutCard from '../components/about-card/about-card'
import portrait from '../img/portraitsm.png'

const AboutPage = () => {
    return (
        <div className={aboutStyles.about}>
            <Layout>
            <h1 className="lg-heading">About <span className="text-secondary">Me</span></h1>
            <div className={aboutStyles.aboutInfo}>
                <img src={portrait} alt="Brian Bartholomew Portrait" className={aboutStyles.bioImage} />
                <div className={aboutStyles.bio}>
                    <h3 className={aboutStyles.bioHeader}>Bio</h3>
                    <p>I am a full-stack developer that focuses on creating amazing websites and applications.  My specialtiy is Javascript.  I enjoy learning new skills and teaching them to others.  Take a look at <Link to="/projects">my work </Link> and 
                        <Link to="/contact"> get in touch</Link> if you want to work together.
                    </p>
                </div>
                <AboutCard 
                className={aboutStyles.job1}
                companyName="Takeout7" 
                jobTitle="Software Engineer" 
                responsibilities={[
                    'Architect and design major GUI components of the TakeOut7 solution using HTML, CSS, Javascript, Typescript and frameworks such as Angular and React',
                    'Utilize AWS to maintain and implement the APIs and NodeJS lambdas', 'Gather and draw out requirements from data analysis, research and discussions with stakeholders', 
                    'Develop, test, roll-out and support the TakeOut7 solutions', 'Manage multiple projects and stakeholder expectations'
                ]} 
                />
                <AboutCard
                className={aboutStyles.job2}
                companyName="Trilogy Education"
                jobTitle="Substitute TA UConn and Remote Tutor"
                responsibilities={[
                    'Serve as a substitute teaching assistant for the UConn in person bootcamp',
                    'Assist the instructor in teaching the web development classes following the curriculm',
                    'Remotely mentor and tutor students from various universities that are assigned to me via the student success managers',
                    'Assist studens in learning various web technologies such as HTML, CSS, Javascript, Node, React, APIs and many more',
                    'Manage student roster and email to ensure that the students schedule their sessions and get the assistance they need'
                ]}
                />
                <AboutCard 
                className={aboutStyles.job3}
                companyName="Altice USA"
                jobTitle="NOC Level 3 Voice Technician"
                responsibilities={[
                    'Implemented and Maintained a wiki page that technicians use for documentation that pertains to daily functions',
                    'Maintained, repaired and make various improvements to Optimum’s voice network utilizing Unix/Linux scripts, database updates and network monitoring',
                    'Utilized a remedy ticketing system to maintain and track current NOC, Network and Voice services issues'
                ]} 
                />
                <AboutCard
                className={aboutStyles.job4}
                companyName="Happy Hands PREP"
                jobTitle="Technical Consultant"
                responsibilities={[
                    'Developed and Implemented a Website to help promote the business',
                    'Set up and maintain the computers and network at the business',
                    'Implement and Support software solution to make the business run more efficiently'
                ]} 
                />
            </div>
            </Layout>
        </div>
    )
}

export default AboutPage

