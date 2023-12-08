import React from "react";
// import NavButtons from "./NavButtons";
// import InventoryList from "./InventoryList";
// import BagDetails from "./BagDetails";
// import BagChangeForm from "./BagChangeForm";

class BeanMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInventory: true,
      displayBagChange: false,
      displayBagDetails: false,
    }
  };

  render() {
    let currentScreen = null;

    if (this.state.inventoryOpen === true) {
      currentScreen = (
        <React.Fragment>
          <h3>Inventory</h3>
        </React.Fragment>
      )

    }

    return (
      <React.Fragment>
        {currentScreen}
      </React.Fragment>
    );
  };
}

export default BeanMachine;