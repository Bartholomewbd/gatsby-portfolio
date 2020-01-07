import React from 'react'
import Layout from '../components/layout/layout'

import projectStyles from '../styles/project.module.scss'

import ProjectCard from '../components/project-card/project-card'
import happyHandsImage from '../img/projects/happyhands.png'
import backgroundGeneratorImage from '../img/projects/backgroundgenerator.jpg'
import faceDetectionImage from '../img/projects/facedetection.jpg'
import kittySocialImage from '../img/projects/kittysocial.jpg'

const Projects = () => {
    return (
        <Layout>
            <div className={projectStyles.project}>
                <h1 className="lg-heading">My <span className="text-secondary">Projects</span></h1>
                <div className={projectStyles.projects}>
                    <ProjectCard projectImage={happyHandsImage} liveUrl="https://happyhandsprep.com" githubUrl="https://github.com/Bartholomewbd/hhp" />
                    <ProjectCard projectImage={backgroundGeneratorImage} liveUrl="https://bartholomewbd.github.io/bggradient/" githubUrl="https://github.com/Bartholomewbd/bggradient" />
                    <ProjectCard projectImage={faceDetectionImage} liveUrl="https://bartholomewbd.github.io/imgdetection/" githubUrl="https://github.com/Bartholomewbd/imgdetection" />
                    <ProjectCard projectImage={kittySocialImage} liveUrl="https://bartholomewbd.github.io/kittysocial/" githubUrl="https://github.com/Bartholomewbd/kittysocial" />
                </div>
            </div>
        </Layout>
    )
}

export default Projects