import React, { Component } from "react";

class ExitBtn extends Component {
  render() {
    return (
      <div className="exit-btn-wrapper">
        <img
          src="./images/buttons/close.png"
          alt="Click to close modal"
          className="exit-btn"
        />
      </div>
    );
  }
}

export default ExitBtn;
