import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa"

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          address
          author
          city_state
          description
          phone
          title
          zip
        }
      }
      lcms: file(relativePath: { eq: "lcms.png" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="footer-container has-text-white flex justify-between px-12 py-12">
      <div>
        <Img
          fluid={data.lcms.childImageSharp.fluid}
          style={{ width: "200px" }}
        />
      </div>
      <div className="flex flex-col self-center">
        <ul className="flex">
          <li className="mx-1">Nav 1</li>
          <li className="mx-1">Nav 2</li>
          <li className="mx-1">Nav 3</li>
          <li className="mx-1">Nav 4</li>
          <li className="mx-1">Nav 5</li>
        </ul>
        <ul className="flex justify-end">
          <li className="mx-1">
            <FaFacebookSquare />
          </li>
          <li className="mx-1">
            <FaTwitterSquare />
          </li>
          <li className="mx-1">
            <FaInstagram />
          </li>
        </ul>
      </div>
    </div>
  )
}
