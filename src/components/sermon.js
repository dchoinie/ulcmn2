import React from "react"

export default props => {
  return (
    <div className="p-4 m-2">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>{props.sermon.dayInTheChurchYear}</p>
          <p>{props.sermon.date}</p>
        </div>
        <div className="flex flex-col has-text-right">
          <p>{props.sermon.author}</p>
          <p>University Lutheran Chapel</p>
          <p>Minneapolis, Minnesota</p>
        </div>
      </div>
      <div className="has-text-centered py-4">
        <p>+ {props.sermon.title} +</p>
        <p>{props.sermon.scripture}</p>
      </div>

      <iframe
        title={props.sermon.title}
        src={props.sermon.sermon.file.url}
        width="100%"
        height="500px"
      ></iframe>
    </div>
  )
}
