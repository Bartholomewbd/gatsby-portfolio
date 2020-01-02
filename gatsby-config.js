module.exports = {
  siteMetadata: {
    title: 'Brian\'s Portfolio',
    author: 'Brian Bartholomew'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`
  ]
}
