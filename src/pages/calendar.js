import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

export default () => {
  return (
    <Layout>
      <PageTitle title="ULC Calendar" />
      <div className="container my-6">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=3r1jansvntqs0fa1todhgqli1k%40group.calendar.google.com&ctz=America%2FChicago"
          style={{ border: "0", width: "100%", height: "800px" }}
          frameborder={0}
        ></iframe>
      </div>
    </Layout>
  )
}
