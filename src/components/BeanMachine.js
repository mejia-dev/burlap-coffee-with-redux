import React from "react";
import NavButtons from "./NavButtons";
import { v4 } from 'uuid';
import InventoryList from "./InventoryList";
import BagChangeForm from "./BagChangeForm";
import BagDetails from "./BagDetails";


class BeanMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInventory: true,
      displayBagChange: false,
      displayBagChangeMode: null,
      displayBagDetails: false,
      dataBagInventory: [
        {
          name: "Arabica",
          origin: "Brazil",
          pricePerPound: 10,
          roast: "light",
          currentPounds: 130,
          id: v4()
        },
        {
          name: "Robusta",
          origin: "India",
          pricePerPound: 6,
          roast: "medium",
          currentPounds: 130,
          id: v4()
        },
      ],
      dataBagCurrentlySelected: null,
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

  handleButtonDisplayEditBag = (bagID) => {
    const selectedBag = this.state.dataBagInventory.filter((bag) => bag.id === bagID)[0];
    this.setState({
      displayInventory: false,
      displayBagChange: true,
      displayBagChangeMode: "Edit",
      displayBagDetails: false,
      dataBagCurrentlySelected: selectedBag,
    })
  };

  handleButtonDisplayBagDetails = (bagID) => {
    const selectedBag = this.state.dataBagInventory.filter((bag) => bag.id === bagID)[0];
    this.setState({
      displayInventory: false,
      displayBagChange: false,
      displayBagChangeMode: null,
      displayBagDetails: true,
      dataBagCurrentlySelected: selectedBag,
    })
  };

  handleButtonDataBagDecrementPounds = (bagID, amount) => {
    const updatedBagInventory = this.state.dataBagInventory.map((bag) => {
      if (bag.id === bagID) {
        return {
          ...bag,
          currentPounds: bag.currentPounds - amount,
        };
      }
      return bag;
    });
    this.setState({
      dataBagInventory: updatedBagInventory,
    });
  };

  handleButtonDataAddFormSubmit = (newBag) => {
    const updatedBagInventory = this.state.dataBagInventory.concat({
      name: newBag.name,
      origin: newBag.origin,
      pricePerPound: newBag.pricePerPound,
      roast: newBag.roast,
      currentPounds: newBag.currentPounds,
      id: v4()
    });
    this.setState({
      displayInventory: true,
      displayBagChange: false,
      displayBagChangeMode: null,
      displayBagDetails: false,
      dataBagInventory: updatedBagInventory,
      dataBagCurrentlySelected: null
    });
  };

  handleButtonDataEditFormSubmit = (newBag,oldBag) => {
    const updatedBagInventory = this.state.dataBagInventory.map((bag) => {
      if (bag.id === oldBag.id) {
        return {
          ...bag,
          name: newBag.name,
          origin: newBag.origin,
          pricePerPound: newBag.pricePerPound,
          roast: newBag.roast,
          currentPounds: newBag.currentPounds,
        };
      }
      return bag;
    });
    this.setState({
      displayInventory: true,
      displayBagChange: false,
      displayBagChangeMode: null,
      displayBagDetails: false,
      dataBagInventory: updatedBagInventory,
      dataBagCurrentlySelected: null
    });
  };

  render() {
    let currentScreen = null;

    if (this.state.displayInventory === true) {
      currentScreen = (
        <React.Fragment>
          <InventoryList
            coffeeBagInventory={this.state.dataBagInventory}
            buttonActionBagCallEdit={this.handleButtonDisplayEditBag}
            buttonActionBagSellPound={this.handleButtonDataBagDecrementPounds}
            clickActionViewDetails={this.handleButtonDisplayBagDetails}
          />
        </React.Fragment>
      )
    } else if (this.state.displayBagDetails === true) {
      currentScreen = (
        <React.Fragment>
          <BagDetails 
            currentBag={this.state.dataBagCurrentlySelected}
          />
        </React.Fragment>
      )
    } else if (this.state.displayBagChange === true) {
      let passedBag = {}
      let formSubmissionFunction;
      if (this.state.displayBagChangeMode === "Edit") {
        passedBag = this.state.dataBagCurrentlySelected
        formSubmissionFunction = this.handleButtonDataEditFormSubmit
      } else {
        formSubmissionFunction = this.handleButtonDataAddFormSubmit
      }
      currentScreen = (
        <React.Fragment>
          <BagChangeForm
            changeMode={this.state.displayBagChangeMode}
            currentBag={passedBag}
            onFormSubmit={formSubmissionFunction}
          />
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
          buttonActionDisplayInventory={this.handleButtonDisplayInventory}
          buttonActionAddBag={this.handleButtonDisplayAddBag}
        />
        {currentScreen}
      </React.Fragment>
    );
  };
}

export default BeanMachine;