const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const sermonDetailTemplate = path.resolve(
      "src/templates/sermonDetailTemplate.js"
    )
    const bulletinDetailTemplate = path.resolve(
      "src/templates/bulletinDetailTemplate.js"
    )
    const newsletterDetailTemplate = path.resolve(
      "src/templates/newsletterDetailTemplate.js"
    )
    resolve(
      graphql(`
        {
          allContentfulSermon(sort: { fields: date, order: DESC }) {
            edges {
              node {
                author
                contentful_id
                date(formatString: "MMMM DD, YYYY")
                dayInTheChurchYear
                title
                sermon {
                  file {
                    url
                  }
                }
                slug
              }
            }
          }
          allContentfulBulletin(sort: { fields: date, order: DESC }) {
            edges {
              node {
                contentful_id
                date(formatString: "MMMM DD, YYYY")
                dayInTheChurchYear
                slug
                bulletin {
                  file {
                    url
                  }
                }
              }
            }
          }
          allContentfulNewsletter(sort: { fields: date, order: DESC }) {
            edges {
              node {
                contentful_id
                date(formatString: "MMMM DD, YYYY")
                slug
                issueNumber
                newsletter {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulSermon.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: sermonDetailTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        result.data.allContentfulBulletin.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: bulletinDetailTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        result.data.allContentfulNewsletter.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: newsletterDetailTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        return
      })
    )
  })
}
