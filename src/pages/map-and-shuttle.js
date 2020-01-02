import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

export default () => {
  return (
    <Layout>
      <PageTitle title="Rides To Church" />
      <div className="container">
        <div className="card my-6">
          <div className="card-content">
            <p className="title">
              We are now providing rides on an individual need basis.
            </p>
            <p className="subtitle">
              Whether you want to come for just the Divine Service, for Sunday
              Morning Bible Study, or even for some midweek events, we have
              plenty of willing drivers to give you a lift. If you would like a
              ride, please contact John Wagner (320-279-7004).
            </p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.1062552431076!2d-93.24352718424501!3d44.98215257349903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d72aba964d7%3A0x9f63d63e211d6d6f!2sLuther%20House!5e0!3m2!1sen!2sus!4v1577808245971!5m2!1sen!2sus"
          style={{ width: "100%", height: "500px" }}
          title="map"
          className="my-6"
        ></iframe>
      </div>
    </Layout>
  )
}
