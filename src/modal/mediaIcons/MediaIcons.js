import React from "react";
import { MediaIcon } from "./MediaIcon.js";

class MediaIcons extends React.Component {
  render() {
    const iconsData = [
      { name: "twitter", src: "./images/socialMediaIcons/twitter.png" },
      { name: "facebook", src: "./images/socialMediaIcons/facebook.png" },
      { name: "email", src: "./images/socialMediaIcons/email.png" },
      { name: "link", src: "./images/socialMediaIcons/Group 8.png" }
    ];

    const icons = iconsData.map(icon => (
      <MediaIcon
        key={icon.name}
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

export default MediaIcons;
