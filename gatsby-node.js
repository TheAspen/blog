const path = require(`path`)


// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/components/BlogPost.tsx`)
  const result = await graphql(`
  query BlogPosts {
    allMarkdownRemark {
      nodes {
        frontmatter {
          index
        }
      }
    }
  }
  `)
  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/posts/${node.frontmatter.index}`,
      component: blogPostTemplate,
      context: {
        index: node.frontmatter.index,
      },
    })
  })
}