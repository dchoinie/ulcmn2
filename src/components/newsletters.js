import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Newsletter from "./newsletter"

const getNewsletters = graphql`
  {
    newsletters: allContentfulNewsletter(sort: { fields: date, order: DESC }) {
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
`

const newsletters = () => {
  return (
    <div>
      <StaticQuery
        query={getNewsletters}
        render={data => {
          return (
            <div className="info-grid">
              {data.newsletters.edges.map(({ node: newsletter }) => {
                return (
                  <Newsletter
                    key={newsletter.contentful_id}
                    newsletter={newsletter}
                  />
                )
              })}
            </div>
          )
        }}
      />
    </div>
  )
}

export default newsletters
