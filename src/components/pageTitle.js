import React, { Component } from "react"
import PropTypes from "prop-types"

export default class pageTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
  }
  render() {
    return (
      <div className="flex flex-col my-12" >
        <h2
          className="text-5xl font-bold self-center">
          {this.props.title}
        </h2>
        <h4 className="text-2xl self-center">{this.props.subTitle}</h4>
      </div>
    )
  }
}
