import React from 'react'
import Layout from '../components/layout/layout'
import { useStaticQuery,graphql, Link } from 'gatsby'


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
                <h1>Blog</h1>
                <ul>
                    {data.allMarkdownRemark.edges.map(post => {
                        return (
                        <li>
                          <Link to={`blog/post/${post.node.fields.slug}`}>
                            <h3>{post.node.frontmatter.title}</h3>
                          </Link>
                            <p>{post.node.frontmatter.date}</p>
                            <p>Written by: {post.node.frontmatter.author}</p>
                            <br />
                            <p>{post.node.excerpt}</p>
                        </li> 
                        )
                    })}
                </ul>
            </Layout>
        </div>
    )
}

export default BlogPage