import React, { Component } from "react";
import SharingModal from "./SharingModal";
import Logo from "./Logo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      showModal: false
    };
  }

  handleItemClick() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

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
        thmb: "./images/logoExamples/phone.png",
        img: "./images/logoExamples/sm-lg.png",
        description: "Logo on mobile"
      }
    ];
    let modal = null;
    if (this.state.showModal) {
      modal = (
        <SharingModal
          itemsWithLogo={itemsWithLogo}
          onLogoClick={this.handleItemClick}
        />
      );
    }
    return (
      <div>
        <Logo onLogoClick={this.handleItemClick}/>
        <div>{modal}</div>
      </div>
    );
  }
}

export default App;
