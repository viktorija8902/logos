import React, { Component } from "react";
import { Navigation } from "./Navigation.js";
import ReviewedLogoExample from "./ReviewedLogoExample.js";
import { Description } from "./Description.js";
import Icons from "./Icons.js";

//TODO implement props validation everywhere
class SharingModal extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      clickedItem: this.props.itemsWithLogo[0],
    };
  }

  getItem(items, itemId) {
    return items.find(item => item.id === itemId);
  }

  handleItemClick(itemId) {
    this.setState({
      clickedItem: this.getItem(this.props.itemsWithLogo, itemId)
    });
  }

  render() {
    return (
      <div>
        <Icons/>
        <div>
          <Navigation 
            itemsWithLogo={this.props.itemsWithLogo}
            onItemClick={this.handleItemClick}
            clickedItem={this.props.clickedItem}
          />
          <div className="righ-side">
            <ReviewedLogoExample 
              id={this.state.clickedItem.id}
              src={this.state.clickedItem.thmb} 
              alt={this.state.clickedItem.description}
            />
            <Description/>
          </div>
        </div>
      </div>
    )
  }
}

export default SharingModal;
