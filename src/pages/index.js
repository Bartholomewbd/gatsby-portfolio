import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'

const IndexPage = () => {
    return (
        <div>
            <Layout>
            <h1>Hello, I'm Brian.</h1>
            <h2>Full-Stack Developer, Creator & Teacher</h2>
            <p>Lets work together! <Link to="/contact">Contact Me</Link></p>
            </Layout>
        </div>
    )
}

export default IndexPage;