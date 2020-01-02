import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

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
      className="navbar py-2 px-24 flex justify-between"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div className="has-text-white" style={{ width: "45%" }}>
        <div className="flex justify-between h-full">
          <div className="flex" style={{ width: "50%" }}>
            <h2 className="self-center">Support</h2>
          </div>
          <div className="flex" style={{ width: "50%" }}>
            <ul className="flex justify-between w-full">
              <li className="mx-2 self-center">About ULC</li>
              <li className="mx-2 self-center">Calendar</li>
              <li className="mx-2 self-center">Map &amp; Shuttle</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center" style={{ width: "10%" }}>
        <Img
          fluid={data.logo.childImageSharp.fluid}
          style={{ width: "50px" }}
        />
      </div>
      <div className="has-text-white" style={{ width: "45%" }}>
        <div className="flex justify-between h-full">
          <div className="flex" style={{ width: "50%" }}>
            <ul className="flex justify-between w-full">
              <li className="mx-2 self-center">Resources</li>
              <li className="mx-2 self-center">Library</li>
              <li className="mx-2 self-center">Contact</li>
            </ul>
          </div>
          <div className="flex justify-end" style={{ width: "50%" }}>
            <div className="flex">
              <FaFacebook className="mx-2 self-center" />
              <FaTwitter className="mx-2 self-center" />
              <FaInstagram className="mx-2 self-center" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

{
  /* <nav
      className="navbar py-2 px-12"
      role="navigation"
      aria-label="main navigation"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div className="navbar-brand">
        <Link to="/">
          <Img
            fluid={data.logo.childImageSharp.fluid}
            style={{ width: "50px" }}
          />
        </Link>
        <div
          role="button"
          className="navbar-burger burger pointer"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMain"
          style={{ border: "1px solid white" }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbarMain" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link is-arrowless pointer">About ULC</div>
            <div className="navbar-dropdown">
              <Link to="/" className="navbar-item has-text-black">
                Worship Times &amp; Location
              </Link>
              <Link to="/" className="navbar-item has-text-black">
                Construction
              </Link>
              <Link to="/" className="navbar-item has-text-black">
                Staff
              </Link>
              <Link to="/history" className="navbar-item has-text-black">
                History
              </Link>
            </div>
          </div>
          <Link to="/calendar" className="navbar-item">
            Calendar
          </Link>
          <Link to="/map-and-shuttle" className="navbar-item">
            Map &amp; Shuttle
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link is-arrowless pointer">Resources</div>
            <div className="navbar-dropdown">
              <Link to="/bulletin" className="navbar-item has-text-black">
                Weekly Bulletin
              </Link>
              <Link to="/sermon" className="navbar-item has-text-black">
                Sermon
              </Link>
              <Link to="/newsletter" className="navbar-item has-text-black">
                Newsletter
              </Link>
              <Link to="/policies" className="navbar-item has-text-black">
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
          <Link to="/" className="navbar-item">
            Library
          </Link>
          <Link to="/" className="navbar-item">
            Contact
          </Link>
          <Link to="/" className="navbar-item">
            Support
          </Link>
        </div>
      </div>
    </nav> */
}
