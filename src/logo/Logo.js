import React from "react";

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onLogoClick();
  }

  render() {
    return (
      <div className="logo-wrapper">
        <img
          className="share-btn"
          src="./images/buttons/button.png"
          alt="click to share"
          onClick={this.handleClick}
        />
        <img
          className="logo"
          src="./images/logoExamples/logo@1x.png"
          alt="logo example"
        />
      </div>
    );
  }
}

export default Logo;
