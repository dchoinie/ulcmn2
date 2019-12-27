import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "favicon.png" }) {
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
    <nav
      className="navbar py-2 px-12"
      role="navigation"
      aria-label="main navigation"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="navbar-brand">
        <Link to="/">
          <Img
            fluid={data.logo.childImageSharp.fluid}
            style={{ width: "50px" }}
          />
        </Link>
        <a
          role="button"
          classNae="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMain"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMain" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless">About ULC</a>
            <div className="navbar-dropdown">
              <a className="navbar-item has-text-black">
                Worship Times &amp; Location
              </a>
              <a className="navbar-item has-text-black">Construction</a>
              <a className="navbar-item has-text-black">Staff</a>
              <a className="navbar-item has-text-black">History</a>
            </div>
          </div>
          <a className="navbar-item">Calendar</a>
          <a className="navbar-item">Map &amp; Shuttle</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless">Resources</a>
            <div className="navbar-dropdown">
              <a className="navbar-item has-text-black">Weekly Bulletin</a>
              <Link to="/sermon" className="navbar-item has-text-black">
                Sermon
              </Link>
              <a className="navbar-item has-text-black">Newsletter</a>
              <a className="navbar-item has-text-black">ULC Policies</a>
              <a className="navbar-item has-text-black">Chapel Council</a>
              <a className="navbar-item has-text-black">Lutheran Resources</a>
            </div>
          </div>
          <a className="navbar-item">Library</a>
          <a className="navbar-item">Contact</a>
          <a className="navbar-item">Support</a>
        </div>
      </div>
    </nav>
  )
}

export default Header
