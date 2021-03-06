import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Sermon from "./sermon"

const getSermons = graphql`
  {
    sermons: allContentfulSermon(sort: { fields: date, order: DESC }) {
      edges {
        node {
          author
          contentful_id
          date(formatString: "MMMM DD, YYYY")
          dayInTheChurchYear
          scripture
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
  }
`

const sermons = () => {
  return (
    <div>
      <StaticQuery
        query={getSermons}
        render={data => {
          return (
            <div className="info-grid">
              {data.sermons.edges.map(({ node: sermon }) => {
                return <Sermon key={sermon.contentful_id} sermon={sermon} />
              })}
            </div>
          )
        }}
      />
    </div>
  )
}

export default sermons
