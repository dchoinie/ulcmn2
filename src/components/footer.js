import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
    <div className="footer-container has-text-white flex justify-between px-12 py-6">
      <div className="self-center">
        <Img
          fluid={data.lcms.childImageSharp.fluid}
          style={{ width: "200px" }}
        />
      </div>
      <div className="flex flex-col self-center">
        <ul className="flex py-1">
          <div className="dropdown is-up is-hoverable mx-1">
            <div className="dropdown-trigger">
              <a aria-haspopup="true" aria-controls="footer-about-dropup">
                <span className="has-text-white">About ULC</span>
              </a>
            </div>
            <div className="dropdown-menu" id="footer-about-dropup" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <Link
                    to="/worship-times"
                    className="navbar-item has-text-black"
                  >
                    Worship Times &amp; Location
                  </Link>
                  <Link
                    to="/construction"
                    className="navbar-item has-text-black"
                  >
                    Construction
                  </Link>
                  <Link to="/staff" className="navbar-item has-text-black">
                    Staff
                  </Link>
                  <Link to="/history" className="navbar-item has-text-black">
                    History
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <li className="mx-1">
            <Link to="/" className="has-text-white">
              Calendar
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/" className="has-text-white">
              Map &amp; Shuttle
            </Link>
          </li>
          <div className="dropdown is-up is-hoverable mx-1">
            <div className="dropdown-trigger">
              <a aria-haspopup="true" aria-controls="footer-about-dropup">
                <span className="has-text-white">Resources</span>
              </a>
            </div>
            <div className="dropdown-menu" id="footer-about-dropup" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <Link to="/" className="navbar-item has-text-black">
                    Weekly Bulletin
                  </Link>
                  <Link to="/" className="navbar-item has-text-black">
                    Sermon
                  </Link>
                  <Link to="/" className="navbar-item has-text-black">
                    Newsletter
                  </Link>
                  <Link to="/" className="navbar-item has-text-black">
                    ULC Policies
                  </Link>
                  <Link to="/" className="navbar-item has-text-black">
                    Chapel Council
                  </Link>
                  <Link to="/" className="navbar-item has-text-black">
                    Lutheran Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <li className="mx-1">
            <Link to="/" className="has-text-white">
              Library
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/" className="has-text-white">
              Contact
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/" className="has-text-white">
              Support
            </Link>
          </li>
        </ul>
        <ul className="flex justify-end py-1">
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
        <ul className="flex justify-end text-xs py-1">
          <li className="mx-1">
            {data.site.siteMetadata.address},{" "}
            {data.site.siteMetadata.city_state} {data.site.siteMetadata.zip}
          </li>
        </ul>
        <p className="has-text-right text-xs mx-1 py-1">
          {data.site.siteMetadata.phone}
        </p>
      </div>
    </div>
  )
}
