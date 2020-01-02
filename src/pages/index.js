import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'

import indexStyles from '../styles/index.module.scss'

const IndexPage = () => {
    return (
        <div>
            <Layout>
                <div className={indexStyles.home}>
                    <h1 className="lg-heading">Hi, I'm Brian <span className="text-secondary">Bartholomew</span></h1>
                    <h2 className="sm-heading">Full-Stack Developer, Creator & Teacher</h2>
                </div>
            </Layout>
        </div>
    )
}

export default IndexPage;