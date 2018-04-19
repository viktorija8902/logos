import React from "react";
import MediaIcons from "./MediaIcons.js";
import ExitBtn from "./ExitBtn.js";
import MinifiedItems from "./MinifiedItems.js";
import EnlargedItem from "./EnlargedItem.js";
import { Footer } from "./Footer.js";

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
