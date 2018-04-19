import React from "react";

export class EnlargedItem extends React.Component {
  render() {
    return (
      <img
        className="enlarged-item"
        id={this.props.id}
        src={this.props.src}
        alt={this.props.alt}
      />
    );
  }
}

export default EnlargedItem;
