import React from "react";

class MinifiedItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onItemClick(e.target.id);
  }

  render() {
    if (this.props.isItemClicked) {
      return (
        <div className="clicked-minified-item">
          <img
            className="minified-item"
            src={this.props.src}
            alt={this.props.alt}
          />
          <img
            className="clicked-icon"
            src="./images/buttons/check.png"
            alt="clicked-item"
          />
        </div>
      );
    } else {
      return (
        <img
          className="minified-item"
          id={this.props.id}
          src={this.props.src}
          alt={this.props.alt}
          onClick={this.handleClick}
        />
      );
    }
  }
}

export default MinifiedItem;
