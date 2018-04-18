import React, { Component } from "react";

export class ReviewedLogoExample extends Component {
  render() {
    return <img id={this.props.id} src={this.props.src} alt={this.props.alt} />;
  }
}

export default ReviewedLogoExample;
