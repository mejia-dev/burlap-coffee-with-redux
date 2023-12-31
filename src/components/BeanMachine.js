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
      displayBagDetails: false
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
    const { dispatch } = this.props;
    const action = {
      type: 'SET_CHANGE_MODE',
      mode: "Add"
    }
    dispatch(action);
    this.setState({
      displayInventory: false,
      displayBagChange: true,
      displayBagDetails: false,
    })
  };

  handleButtonDisplayEditBag = (bagID) => {
    const { dispatch } = this.props;
    const selectedBag = Object.values(this.props.dataBagInventory).filter((bag) => bag.id === bagID)[0];
    const actionSetSelectedBag = {
      type: 'SET_BAG',
      name: selectedBag.name,
      origin: selectedBag.origin,
      pricePerPound: selectedBag.pricePerPound,
      roast: selectedBag.roast,
      currentPounds: selectedBag.currentPounds,
      id: selectedBag.id
    };
    dispatch(actionSetSelectedBag);
    const actionSetChangeMode = {
      type: 'SET_CHANGE_MODE',
      mode: "Edit"
    };
    dispatch(actionSetChangeMode);
    this.setState({
      displayInventory: false,
      displayBagChange: true,
      displayBagDetails: false,
    })
  };

  handleButtonDisplayBagDetails = (bagID) => {
    const { dispatch } = this.props;
    const selectedBag = Object.values(this.props.dataBagInventory).filter((bag) => bag.id === bagID)[0];
    const actionSetSelectedBag = {
      type: 'SET_BAG',
      name: selectedBag.name,
      origin: selectedBag.origin,
      pricePerPound: selectedBag.pricePerPound,
      roast: selectedBag.roast,
      currentPounds: selectedBag.currentPounds,
      id: selectedBag.id
    };
    dispatch(actionSetSelectedBag);
    const actionSetChangeMode = {
      type: 'SET_CHANGE_MODE',
      mode: null
    };
    dispatch(actionSetChangeMode);
    this.setState({
      displayInventory: false,
      displayBagChange: false,
      displayBagDetails: true,
    })
  };

  handleButtonDataBagDecrementPounds = (bagID, amount) => {
    const { dispatch } = this.props;
    const selectedBag = Object.values(this.props.dataBagInventory).filter((bag) => bag.id === bagID)[0];
    const action = {
      type: 'ADD_BAG',
      name: selectedBag.name,
      origin: selectedBag.origin,
      pricePerPound: selectedBag.pricePerPound,
      roast: selectedBag.roast,
      currentPounds: selectedBag.currentPounds - amount,
      id: bagID
    };
    dispatch(action);
  };

  handleButtonDataAddFormSubmit = (newBag) => {
    const { dispatch } = this.props;
    const { name, origin, pricePerPound, roast, currentPounds } = newBag;
    const actionAddToInventory = {
      type: 'ADD_BAG',
      name: name,
      origin: origin,
      pricePerPound: pricePerPound,
      roast: roast,
      currentPounds: currentPounds,
      id: v4()
    };
    dispatch(actionAddToInventory);
    const actionResetSelectedBag = { type: 'RESET' };
    dispatch(actionResetSelectedBag);
    const actionSetChangeMode = {
      type: 'SET_CHANGE_MODE',
      mode: null
    };
    dispatch(actionSetChangeMode);
    this.setState({
      displayInventory: true,
      displayBagChange: false,
      displayBagDetails: false,
    });
  };

  handleButtonDataEditFormSubmit = (newBag, oldBag) => {
    const { dispatch } = this.props;
    const { name, origin, pricePerPound, roast, currentPounds } = newBag;
    const actionAddToInventory = {
      type: 'ADD_BAG',
      name: name,
      origin: origin,
      pricePerPound: pricePerPound,
      roast: roast,
      currentPounds: currentPounds,
      id: oldBag.id
    }
    dispatch(actionAddToInventory);
    const actionResetSelectedBag = { type: 'RESET' };
    dispatch(actionResetSelectedBag);
    const actionSetChangeMode = {
      type: 'SET_CHANGE_MODE',
      mode: null
    };
    dispatch(actionSetChangeMode);
    this.setState({
      displayInventory: true,
      displayBagChange: false,
      displayBagDetails: false,
    });
  };

  handleButtonDataBagDelete = (bagID) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_BAG',
      id: bagID
    }
    dispatch(action);
    this.setState({
      displayInventory: true,
      displayBagChange: false,
      displayBagDetails: false,
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
            currentBag={this.props.dataBagCurrentlySelected}
            onDeleteClick={this.handleButtonDataBagDelete}
          />
        </React.Fragment>
      )
    } else if (this.state.displayBagChange === true) {
      let passedBag = {}
      let formSubmissionFunction;
      if (this.props.displayBagChangeMode.mode === "Edit") {
        passedBag = this.props.dataBagCurrentlySelected
        formSubmissionFunction = this.handleButtonDataEditFormSubmit
      } else {
        formSubmissionFunction = this.handleButtonDataAddFormSubmit
      }
      currentScreen = (
        <React.Fragment>
          <BagChangeForm
            changeMode={this.props.displayBagChangeMode.mode}
            currentBag={passedBag}
            onFormSubmit={formSubmissionFunction}
          />
        </React.Fragment>
      )
    } else {
      currentScreen = (
        <React.Fragment>
          <h3>Welcome!</h3>
          <p>Select "Show Inventory" or "Add Coffee Bag" to get started.</p>
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
  dataBagInventory: PropTypes.object,
  dataBagCurrentlySelected: PropTypes.object,
  displayBagChangeMode: PropTypes.object
};

const mapStateToProps = state => {
  return {
    dataBagInventory: state.dataBagInventory,
    dataBagCurrentlySelected: state.dataBagCurrentlySelected,
    displayBagChangeMode: state.displayBagChangeMode
  }
}

BeanMachine = connect(mapStateToProps)(BeanMachine);

export default BeanMachine;