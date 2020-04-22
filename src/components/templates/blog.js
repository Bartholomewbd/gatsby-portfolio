import React from 'react'
import { graphql } from 'gatsby'

import blogStyles from '../../styles/blog.module.scss'
import Header from '../header/header'

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
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={blogStyles.blogPost} style={{ marginTop: '8vh' }}>
          <h1 className={`text-secondary`}>{props.data.markdownRemark.frontmatter.title}</h1>
          <p className={`${blogStyles.date} text-secondary`}>{props.data.markdownRemark.frontmatter.date}</p>
          <p className={`${blogStyles.author} text-secondary`}>{props.data.markdownRemark.frontmatter.author}</p>
          <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </div>
      </div>
    </div >
  )
}

export default Blog