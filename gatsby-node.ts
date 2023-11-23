const path = require(`path`)


// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/components/BlogPost.tsx`)
  const result = await graphql(`
    query {
      allSitePage {
          nodes {
           frontmatter{
            slug
           }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/posts/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        title: node.frontmatter.title,
      },
    })
  })
}