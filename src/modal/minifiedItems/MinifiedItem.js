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
        <div className="clicked-item-wrapper">
          <img
            className="minified-item"
            src={this.props.src}
            alt={`clicked item: ${this.props.alt}`}
          />
          <img
            className="clicked-icon"
            src="./images/buttons/check.png"
            alt={`clicked item: ${this.props.alt}`}
          />
        </div>
      );
    } else {
      return (
        <div className="item-wrapper">
          <img
            className="minified-item"
            id={this.props.id}
            src={this.props.src}
            alt={`click to choose ${this.props.alt}`}
            onClick={this.handleClick}
          />
        </div>
      );
    }
  }
}

export default MinifiedItem;
