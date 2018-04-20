import React from "react";
import MinifiedItem from "./MinifiedItem.js";

class MinifiedItems extends React.Component {
  render() {
    const minifiedItems = this.props.itemsWithLogo.map(item => (
      <MinifiedItem
        key={item.id}
        id={item.id}
        src={item.thmb}
        alt={item.description}
        onItemClick={this.props.onItemClick}
        isItemClicked={item === this.props.clickedItem}
      />
    ));
    return <div className="minified-items">{minifiedItems}</div>;
  }
}

export default MinifiedItems;
