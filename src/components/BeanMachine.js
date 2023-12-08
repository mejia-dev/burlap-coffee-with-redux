import React from "react";
import NavButtons from "./NavButtons";
import { v4 } from 'uuid';
// import InventoryList from "./InventoryList";
// import BagDetails from "./BagDetails";
// import BagChangeForm from "./BagChangeForm";

class BeanMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInventory: true,
      displayBagChange: false,
      displayBagChangeMode: "Add",
      displayBagDetails: false,
      dataCoffeeBagInventory: [
        {
          name: "Arabica",
          origin: "Brazil",
          pricePerPound: 10,
          roast: "light",
          id: v4()
        },
        {
          name: "Robusta",
          origin: "India",
          pricePerPound: 6,
          roast: "medium",
          id: v4()
        },
      ]
    }
  };

  handleButtonDisplayInventory = () => {
    this.setState({
      displayInventory: true,
      displayBagChange: false,
      displayBagDetails: false,
    })
  };

  handleButtonDisplayAddBag = () => {
    this.setState({
      displayInventory: false,
      displayBagChange: true,
      displayBagChangeMode: "Add",
      displayBagDetails: false,
    })
  };

  render() {
    let currentScreen = null;

    if (this.state.displayInventory === true) {
      currentScreen = (
        <React.Fragment>
          <h3>Inventory</h3>
        </React.Fragment>
      )
    } else if (this.state.displayBagDetails === true) {
      currentScreen = (
        <React.Fragment>
          <h3>Coffee Bag Details</h3>
        </React.Fragment>
      )
    } else if (this.state.displayBagChange === true) {
      let changeMode = "Add";
      if (this.state.displayBagChangeMode === "Edit") {
        changeMode = "Edit"
      }
      
      currentScreen = (
        <React.Fragment>
          <h3>{changeMode} Coffee Bag</h3>
        </React.Fragment>
      )
    } else {
      currentScreen = (
        <React.Fragment>
          <h3>404 Page Not Found</h3>
        </React.Fragment>
      )
    }

    return (      
      <React.Fragment>
        <NavButtons
          buttonActionDisplayInventory = {this.handleButtonDisplayInventory}
          buttonActionAddBag = {this.handleButtonDisplayAddBag}
        />
        {currentScreen}
      </React.Fragment>
    );
  };
}

export default BeanMachine;