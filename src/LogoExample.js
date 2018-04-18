import React, { Component } from 'react';

class LogoExample extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onItemClick(e.target.id);
  }

  render() {
    // if (this.props.isItemClicked) {
    //   return
    // }
    return (
      <img
        id={this.props.id}
        src={this.props.src} 
        alt={this.props.alt}
        onClick={this.handleClick}
        className="item-with-logo"
      />
    )
  }
}

export default LogoExample;
