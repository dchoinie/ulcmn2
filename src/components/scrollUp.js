import React from "react"
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"

export default class ScrollUp extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton AnimationDuration={700} />
      </div>
    )
  }
}
