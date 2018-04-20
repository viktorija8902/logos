import React from "react";
import MediaIcons from "./mediaIcons/MediaIcons.js";
import ExitBtn from "./exitBtn/ExitBtn.js";
import MinifiedItems from "./minifiedItems/MinifiedItems.js";
import EnlargedItem from "./enlargedItem/EnlargedItem.js";
import { Footer } from "./footer/Footer.js";

//TODO implement props validation everywhere
class SharingModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      clickedItem: this.props.itemsWithLogo[0]
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
      <div className="page-cover">
        <div className="item-sharing-modal">
          <ExitBtn onExitClick={this.props.onLogoClick} />
          <MediaIcons />
          <div className="viewing-container">
            <MinifiedItems
              itemsWithLogo={this.props.itemsWithLogo}
              onItemClick={this.handleItemClick}
              clickedItem={this.state.clickedItem}
            />
            <div>
              <EnlargedItem
                id={this.state.clickedItem.id}
                src={this.state.clickedItem.img}
                alt={this.state.clickedItem.description}
              />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SharingModal;
