import React from 'react'
import Layout from '../components/layout/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'

import blogStyles from '../styles/blog.module.scss'


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node{
              frontmatter {
                title
                date
                author
              }
              html
              excerpt
              fields {
                slug
              }
          }
        }
      }
    }
      `)

  return (
    <div>
      <Layout>
        <div className={blogStyles.blog}>
          <h1 className="lg-heading">My <span className="text-secondary">Blog</span></h1>
          <ul className={blogStyles.posts}>
            {data.allMarkdownRemark.edges.map(post => {
              return (
                <li className={blogStyles.post}>
                  <Link to={`blog/post/${post.node.fields.slug}`}>
                    <h2 className={blogStyles.blogHeader}>{post.node.frontmatter.title}</h2>
                    <p className={blogStyles.blogHeader}>{post.node.frontmatter.date}</p>
                    <p className={blogStyles.blogHeader}>Written by: {post.node.frontmatter.author}</p>
                    <p className={blogStyles.excerpt}>{post.node.excerpt}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default BlogPage