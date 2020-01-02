const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')

        console.log(`@@@@@@@@@ ${slug}`)
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/components/templates/blog.js')
    const response = await graphql(`query {
        allMarkdownRemark {
          edges {
            node{
              fields {
                slug
              }
            }
          }
        }
      }`)

      response.data.allMarkdownRemark.edges.forEach((edge) => {
          createPage({
              component: blogTemplate,
              path: `/blog/post/${edge.node.fields.slug}`,
              context: {
                  slug: edge.node.fields.slug
              }
          })
      })
}