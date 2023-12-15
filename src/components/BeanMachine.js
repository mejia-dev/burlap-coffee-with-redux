import React from "react";
import NavButtons from "./NavButtons";
import { v4 } from 'uuid';
import InventoryList from "./InventoryList";
import BagChangeForm from "./BagChangeForm";
import BagDetails from "./BagDetails";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class BeanMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInventory: true,
      displayBagChange: false,
      displayBagChangeMode: null,
      displayBagDetails: false,
      // dataBagInventory: [
      //   {
      //     name: "Arabica",
      //     origin: "Brazil",
      //     pricePerPound: 10,
      //     roast: "light",
      //     currentPounds: 130,
      //     id: v4()
      //   },
      //   {
      //     name: "Robusta",
      //     origin: "India",
      //     pricePerPound: 6,
      //     roast: "medium",
      //     currentPounds: 130,
      //     id: v4()
      //   },
      // ],
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
    const selectedBag = Object.values(this.props.dataBagInventory).filter((bag) => bag.id === bagID)[0];
    this.setState({
      displayInventory: false,
      displayBagChange: true,
      displayBagChangeMode: "Edit",
      displayBagDetails: false,
      dataBagCurrentlySelected: selectedBag,
    })
  };

  handleButtonDisplayBagDetails = (bagID) => {
    const selectedBag = Object.values(this.props.dataBagInventory).filter((bag) => bag.id === bagID)[0];
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
    const { dispatch } = this.props;
    const { name, origin, pricePerPound, roast, currentPounds } = newBag;
    const action = {
      type: 'ADD_BAG',
      name: name,
      origin: origin,
      pricePerPound: pricePerPound,
      roast: roast,
      currentPounds: currentPounds,
      id: v4()
    }
    dispatch(action);
    this.setState({
      displayInventory: true,
      displayBagChange: false,
      displayBagChangeMode: null,
      displayBagDetails: false,
      dataBagCurrentlySelected: null
    });
  };

  handleButtonDataEditFormSubmit = (newBag, oldBag) => {
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

  handleButtonDataBagDelete = (bagID) => {
    const updatedBagInventory = this.state.dataBagInventory.filter((bag) => bag.id !== bagID);
    this.setState({
      displayInventory: true,
      displayBagChange: false,
      displayBagDetails: false,
      dataBagInventory: updatedBagInventory
    })
  };

  render() {
    let currentScreen = null;
    if (this.state.displayInventory === true) {
      currentScreen = (
        <React.Fragment>
          <InventoryList
            coffeeBagInventory={this.props.dataBagInventory}
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
            onDeleteClick={this.handleButtonDataBagDelete}
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

BeanMachine.propTypes = {
  dataBagInventory: PropTypes.object
};

const mapStateToProps = state => {
  return {
    dataBagInventory: state
  }
}

BeanMachine = connect(mapStateToProps)(BeanMachine);

export default BeanMachine;