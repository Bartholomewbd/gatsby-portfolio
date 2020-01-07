import React from 'react'
import {graphql } from 'gatsby'

import Layout from '../layout/layout'

import blogStyles from '../../styles/blog.module.scss'

export const query = graphql`
query (
    $slug : String!
  ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        author
        date
      }
      html
    }
  }
`

const Blog = props => {
    return(
        <Layout>
          <div className={blogStyles.blog}>
            <h1 className="text-secondary">{props.data.markdownRemark.frontmatter.title}</h1>
            <p className="text-secondary">{props.data.markdownRemark.frontmatter.date}</p>
            <p className="text-secondary">{props.data.markdownRemark.frontmatter.author}</p>
            <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>
          </div>
        </Layout>
    )
}

export default Blog