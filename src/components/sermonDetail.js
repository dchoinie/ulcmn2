import React from "react"

const sermonDetail = ({ sermon }) => {
  return (
    <div className="container my-12">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="font-bold">{sermon.dayInTheChurchYear}</p>
          <p>{sermon.date}</p>
        </div>
        <div className="flex flex-col has-text-right">
          <p>{sermon.author}</p>
          <p>University Lutheran Chapel</p>
          <p>Minneapolis, MN</p>
        </div>
      </div>
      <p className="has-text-centered py-4">+ Jesu juva +</p>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">{sermon.title}</h2>
        <p>{sermon.scripture}</p>
      </div>
      <div className="my-6">
        <iframe
          src={sermon.sermon.file.url}
          frameborder={0}
          style={{ width: "100%", height: "100vh" }}
        ></iframe>
      </div>
      <p className="has-text-centered py-4">+ Soli Deo gloria +</p>
    </div>
  )
}

export default sermonDetail
