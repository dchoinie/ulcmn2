import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Bulletin from "./bulletin"

const getBulletins = graphql`
  {
    bulletins: allContentfulBulletin(sort: { fields: date, order: DESC }) {
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
  }
`

const bulletins = () => {
  return (
    <div>
      <StaticQuery
        query={getBulletins}
        render={data => {
          return (
            <div className="info-grid">
              {data.bulletins.edges.map(({ node: bulletin }) => {
                return (
                  <Bulletin key={bulletin.contentful_id} bulletin={bulletin} />
                )
              })}
            </div>
          )
        }}
      />
    </div>
  )
}

export default bulletins
