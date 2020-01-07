import React from 'react'
import Layout from '../components/layout/layout'

import ProjectCard from '../components/project-card/project-card'

const Projects = () => {
    return (
        <Layout>
            <ProjectCard liveUrl="https://happyhandsprep.com" githubUrl="https://github.com/Bartholomewbd/hhp" />
        </Layout>
    )
}

export default Projects