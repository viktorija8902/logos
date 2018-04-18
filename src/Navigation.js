import React from 'react';
import LogoExample from "./LogoExample.js";


export function Navigation(props) {
  return props.itemsWithLogo.map(item => (
    <LogoExample
      key={item.id}
      id={item.id}
      src={item.thmb} 
      alt={item.description}
      onItemClick={props.onItemClick}
      isItemClicked={item === props.clickedItem}
    />
  ));
}
