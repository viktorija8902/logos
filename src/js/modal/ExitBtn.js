import React, { Component } from "react";

class ExitBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onExitClick();
  }

  render() {
    return (
      <div className="exit-btn-wrapper">
        <img
          src="./images/buttons/close.png"
          alt="Click to close modal"
          className="exit-btn"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default ExitBtn;
