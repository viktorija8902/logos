import React, { Component } from "react";
import { Icon } from "./Icon.js";

class Icons extends Component {
  render() {
    const iconsData = [
      { name: "twitter", src: "./images/socialMediaIcons/twitter.png" },
      { name: "facebook", src: "./images/socialMediaIcons/facebook.png" },
      { name: "email", src: "./images/socialMediaIcons/email.png" },
      { name: "link", src: "./images/socialMediaIcons/Group 8.png" }
    ];

    const icons = iconsData.map(icon => (
      <Icon
        name={icon.name}
        src={icon.src}
        alt={`Click to share on ${icon.name}`}
      />
    ));

    return (
      <div className="media-icons">
        <div className="share-text">Share with:</div>
        <div>{icons}</div>
      </div>
    );
  }
}

export default Icons;
