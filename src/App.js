import React, { Component } from 'react';
import SharingModal from "./SharingModal";
import './App.css';

class App extends Component {
  render() {
    const itemsWithLogo = [
      {
        id: "1",
        thmb: "./images/logoExamples/logo-thmb.png",
        img: "./images/logoExamples/logo-lg.png",
        description: "Logo"
      },
      {
        id: "2",
        thmb: "./images/logoExamples/t-shirt-thmb.png",
        img: "./images/logoExamples/shirt-lg.png",
        description: "T-shirt with logo"
      },
      {
        id: "3",
        thmb: "./images/logoExamples/bc-thmb.png",
        img: "./images/logoExamples/bc-lg.png",
        description: "Business card with logo"
      },
      {
        id: "4",
        thmb: "./images/logoExamples/social-media.png", //rename because of ad blocker
        img: "./images/logoExamples/sm-lg.png",
        description: "Logo on mobile"
      }
    ];
    return (
      <SharingModal itemsWithLogo={itemsWithLogo}/>
    );
  }
}

export default App;
